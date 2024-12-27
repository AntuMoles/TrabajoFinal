import React from 'react';
import styles from './Home.module.css';

export default function Home({ onCreateRecipe }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Creador de Recetas</h2>
      <p className={styles.description}>Crea tus propias recetas!</p>
      <button 
        onClick={onCreateRecipe} 
        className={styles.button}
      >
        Crear receta
      </button>
    </div>
  );
}





