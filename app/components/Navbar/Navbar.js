'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-brand']}>Marcos Mellebovsky</div>
      
      <button 
        className={`${styles['hamburger']} ${isOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`${styles['navbar-links']} ${isOpen ? styles.active : ''}`}>
        <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>
        <li><a href="#proyectos" onClick={closeMenu}>Proyectos</a></li>
        <li><a href="#habilidades" onClick={closeMenu}>Habilidades</a></li>
        <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
      </ul>
    </nav>
  );
}
