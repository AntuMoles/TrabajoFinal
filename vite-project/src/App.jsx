import React, { useState, useEffect } from 'react';
import Home from './componentes/Home/Home';
import CreateRecipe from './componentes/CreateRecipe/CreateRecipe';
import RecipeHistory from './componentes/Recipe/RecipeHistory';
import styles from './App.module.css';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      setSavedRecipes(JSON.parse(storedRecipes));
    }
  }, []);

  const saveRecipe = (recipe) => {
    const updatedRecipes = [...savedRecipes, recipe];
    setSavedRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  const deleteRecipe = (index) => {
    const updatedRecipes = savedRecipes.filter((_, i) => i !== index);
    setSavedRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      <div className="container mx-auto p-4">
        <header className={styles.header}>
          <h1 className={styles.title}>Recipe Builder</h1>
          <button
            onClick={toggleDarkMode}
            className={styles.toggleButton}
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </header>
        <main className="mb-8">
          {currentView === 'home' && <Home onCreateRecipe={() => setCurrentView('create-recipe')} />}
          {currentView === 'create-recipe' && (
            <CreateRecipe
              onSaveRecipe={saveRecipe}
              onBack={() => setCurrentView('home')}
            />
          )}
          {currentView === 'recipe-history' && (
            <RecipeHistory
              recipes={savedRecipes}
              onDeleteRecipe={deleteRecipe}
              onBack={() => setCurrentView('home')}
            />
          )}
        </main>
        <nav className={styles.nav}>
          <button onClick={() => setCurrentView('home')} className={`${styles.navButton} ${styles.primaryButton}`}>Home</button>
          <button onClick={() => setCurrentView('recipe-history')} className={`${styles.navButton} ${styles.secondaryButton}`}>Historial de recetas</button>
        </nav>
      </div>
    </div>
  );
}