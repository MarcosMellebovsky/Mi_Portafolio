import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.pie_pagina}>


      <div className={styles.grupo_1}> 
        <div className={styles.box}>
          <figure>
            <a href="#">
              <Image src="/globe.svg" alt="logo de footer" width={100} height={100} />
            </a>
          </figure>
        </div>
        <div className={styles.box}>
          <h2>SOBRE MI</h2>
          <p>Desarrollador web apasionado por crear soluciones innovadoras y experiencias digitales excepcionales.</p>
        </div>
        <div className={styles.box}>
          <h2>SEGUIME</h2>
          <div className={styles.red_social}>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
