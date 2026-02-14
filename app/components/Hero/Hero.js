'use client';
import styles from './Hero.module.css';

export default function Hero() {
  const handleScrollToProyectos = () => {
    const proyectosSection = document.getElementById('proyectos');
    if (proyectosSection) {
      proyectosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles['hero-content']}>
        <h1>Hola, soy Marcos</h1>
        <p>
          Desarrollador web full-stack con pasión por crear experiencias digitales 
          innovadoras. Especializado en React, Next.js y JavaScript moderno.
        </p>
        <button className={styles['hero-btn']} onClick={handleScrollToProyectos}>Ver mis proyectos</button>
      </div>
    </section>
  );
}
