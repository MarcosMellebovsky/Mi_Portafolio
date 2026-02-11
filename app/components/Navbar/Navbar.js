import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-brand']}>Marcos Mellebovsky</div>
      <ul className={styles['navbar-links']}>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}
