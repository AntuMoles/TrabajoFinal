import React from 'react';

const ingredients = [
  { id: 1, name: 'Pollo', category: 'Proteinas', nutritionValue: 165 },
  { id: 2, name: 'Arroz', category: 'Carbohidratos', nutritionValue: 216 },
  { id: 3, name: 'Brocoli', category: 'Vegetales', nutritionValue: 55 },
  { id: 4, name: 'Salmon', category: 'Proteinas', nutritionValue: 208 },
  { id: 5, name: 'Papa', category: 'Carbohidratos', nutritionValue: 180 },
  { id: 6, name: 'Lechuga', category: 'Vegetales', nutritionValue: 23 },
];

export default function IngredientList({ onSelectIngredient }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4 text-primary">Ingredientes disponibles</h3>
      {Object.entries(ingredients.reduce((acc, ingredient) => {
        (acc[ingredient.category] = acc[ingredient.category] || []).push(ingredient);
        return acc;
      }, {})).map(([category, items]) => (
        <div key={category} className="mb-6">
          <h4 className="text-lg font-medium mb-2 text-secondary">{category}</h4>
          <ul className="space-y-2">
            {items.map((ingredient) => (
              <li
                key={ingredient.id}
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded transition duration-300"
                onClick={() => onSelectIngredient(ingredient)}
              >
                {ingredient.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
