import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles['hero-content']}>
        <h1>Hola, soy Marcos</h1>
        <p>
          Desarrollador web full-stack con pasión por crear experiencias digitales 
          innovadoras. Especializado en React, Next.js y JavaScript moderno.
        </p>
        <button className={styles['hero-btn']}>Ver mi trabajo</button>
      </div>
    </section>
  );
}
