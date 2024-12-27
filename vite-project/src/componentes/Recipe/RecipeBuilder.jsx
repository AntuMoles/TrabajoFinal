import React from 'react';

export default function RecipeBuilder({ ingredients, onUpdateIngredient, onRemoveIngredient }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4 text-primary">Tu receta</h3>
      {ingredients.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Ningun Ingrediente seleccionado.</p>
      ) : (
        <ul className="space-y-4">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="flex items-center justify-between">
              <span className="flex-grow">{ingredient.name}</span>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  min="1"
                  value={ingredient.quantity}
                  onChange={(e) => onUpdateIngredient(index, parseInt(e.target.value))}
                  className="w-16 p-1 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  onClick={() => onRemoveIngredient(index)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                >
                  Borrar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
