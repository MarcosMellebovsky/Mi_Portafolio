import styles from './Contacto.module.css';

export default function Contacto() {
  return (
    <section id="contacto" className={styles.contacto}>
      <h2>Contacto</h2>
      <p className={styles['contacto-description']}>
        ¿Tienes un proyecto en mente o quieres colaborar? ¡Estoy siempre abierto a nuevas oportunidades! 
        Déjame saber cómo puedo ayudarte.
      </p>
      <div className={styles['contacto-links']}>
        <a href="mailto:tu@email.com" className={styles['contacto-link']}>Email</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles['contacto-link']}>LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className={styles['contacto-link']}>GitHub</a>
      </div>
    </section>
  );
}
