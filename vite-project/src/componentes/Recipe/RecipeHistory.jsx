import React from 'react';
import RecipeCard from './RecipeCard';

export default function RecipeHistory({ recipes, onDeleteRecipe, onBack }) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-primary">Recipe History</h2>
      {recipes.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Ninguna receta guardada todavia.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              recipe={recipe}
              onDelete={() => onDeleteRecipe(index)}
            />
          ))}
        </div>
      )}
      <button 
        onClick={onBack} 
        className="mt-6 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300"
      >
        volver
      </button>
    </div>
  );
}
