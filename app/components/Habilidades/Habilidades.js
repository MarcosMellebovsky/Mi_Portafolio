import styles from './Habilidades.module.css';

export default function Habilidades() {
  const habilidades = [
    'JavaScript', 'React', 'Next.js', 'Node.js', 
    'MongoDB', 'PostgreSQL', 'CSS/SASS', 'Tailwind CSS',
    'Git', 'REST APIs', 'TypeScript', 'Docker'
  ];

  return (
    <section id="habilidades" className={styles.habilidades}>
      <h2>Habilidades</h2>
      <div className={styles['habilidades-container']}>
        {habilidades.map((habilidad, index) => (
          <span key={index} className={styles['skill-badge']}>
            {habilidad}
          </span>
        ))}
      </div>
    </section>
  );
}
