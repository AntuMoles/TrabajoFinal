import React, { useState, useEffect } from 'react';
import IngredientList from '../IngredientList';
import RecipeBuilder from '../Recipe/RecipeBuilder';
import RecipeSummary from '../Recipe/RecipeSummary';
import styles from './CreateRecipe.module.css';

export default function CreateRecipe({ onSaveRecipe, onBack }) {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [recipeName, setRecipeName] = useState('');
  const [nutritionScore, setNutritionScore] = useState(0);

  useEffect(() => {
    const score = selectedIngredients.reduce((total, ingredient) => total + ingredient.nutritionValue * ingredient.quantity, 0);
    setNutritionScore(Math.round(score));
  }, [selectedIngredients]);

  const handleSaveRecipe = () => {
    if (recipeName && selectedIngredients.length > 0) {
      onSaveRecipe({
        name: recipeName,
        ingredients: selectedIngredients,
        nutritionScore
      });
      onBack();
    } else {
      alert('Por favor agrega un nombre y un ingrediente.');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Crea tu receta</h2>
      <input
        type="text"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        placeholder="Nombre de la receta"
        className={styles.input}
      />
      <div className={styles.flexContainer}>
        <div className="w-full md:w-1/2">
          <IngredientList onSelectIngredient={(ingredient) => setSelectedIngredients([...selectedIngredients, { ...ingredient, quantity: 1 }])} />
        </div>
        <div className="w-full md:w-1/2">
          <RecipeBuilder
            ingredients={selectedIngredients}
            onUpdateIngredient={(index, quantity) => {
              const updatedIngredients = [...selectedIngredients];
              updatedIngredients[index].quantity = quantity;
              setSelectedIngredients(updatedIngredients);
            }}
            onRemoveIngredient={(index) => {
              setSelectedIngredients(selectedIngredients.filter((_, i) => i !== index));
            }}
          />
        </div>
      </div>
      <RecipeSummary nutritionScore={nutritionScore} />
      <div className={styles.buttonContainer}>
        <button onClick={onBack} className={`${styles.button} ${styles.backButton}`}>Volver</button>
        <button onClick={handleSaveRecipe} className={`${styles.button} ${styles.saveButton}`}>Guardar Receta</button>
      </div>
    </div>
  );
}

