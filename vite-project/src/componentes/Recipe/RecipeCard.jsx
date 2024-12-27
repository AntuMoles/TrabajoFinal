import React from 'react';

export default function RecipeCard({ recipe, onDelete }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105">
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-primary">{recipe.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
         Valor nutricional : <span className="font-bold text-secondary">{recipe.nutritionScore}</span>
        </p>
        <h4 className="font-medium text-lg mb-2 text-primary">Ingredientes:</h4>
        <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name} (x{ingredient.quantity})
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={onDelete}
        className="w-full py-3 bg-red-500 text-white font-semibold hover:bg-red-600 transition duration-300"
      >
        Borrar receta
      </button>
    </div>
  );
}
