import React from 'react';

export default function RecipeSummary({ nutritionScore }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4 text-primary">Recipe Summary</h3>
      <p className="text-lg">
        Valor Nutricional : <span className="font-bold text-secondary">{nutritionScore}</span>
      </p>
    </div>
  );
}

