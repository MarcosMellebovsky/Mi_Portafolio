'use client';

import { useState } from 'react';
import styles from './Contacto.module.css';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.nombre || !formData.email || !formData.asunto || !formData.mensaje) {
      setError('Por favor completa todos los campos');
      return;
    }

    try {
      setEnviado(true);
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
      setTimeout(() => setEnviado(false), 5000);
    } catch (err) {
      setError('Error al enviar el mensaje');
    }
  };

  return (
    <section id="contacto" className={styles.contacto}>
      <h2>Contacto</h2>
      <p className={styles['contacto-description']}>
        ¿Tienes un proyecto en mente o quieres colaborar? ¡Estoy siempre abierto a nuevas oportunidades! 
        Déjame saber cómo puedo ayudarte.
      </p>
      
      <form className={styles['contacto-form']} onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="asunto">Asunto</label>
          <input
            type="text"
            id="asunto"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            placeholder="¿De qué se trata?"
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Cuéntame tu idea..."
            rows="5"
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}
        {enviado && <p className={styles.exito}>¡Mensaje enviado exitosamente!</p>}

        <button type="submit" className={styles['submit-btn']}>Enviar Mensaje</button>
      </form>
    </section>
  );
}
