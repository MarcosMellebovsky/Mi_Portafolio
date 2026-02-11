import styles from './Proyectos.module.css';

export default function Proyectos() {
  const proyectos = [
    { 
      id: 1, 
      titulo: 'E-Commerce Premium', 
      descripcion: 'Plataforma de compra y venta con carrito, pagos y panel de administrador.'
    },
    { 
      id: 2, 
      titulo: 'Blog & Portfolio', 
      descripcion: 'Blog dinámico desarrollado con Next.js y MDX para contenido moderno.'
    },
    { 
      id: 3, 
      titulo: 'Task Manager Pro', 
      descripcion: 'Aplicación de gestión de tareas con autenticación y base de datos.'
    }
  ];

  return (
    <section id="proyectos" className={styles.proyectos}>
      <h2>Proyectos</h2>
      <div className={styles['proyectos-grid']}>
        {proyectos.map(proyecto => (
          <div key={proyecto.id} className={styles['proyecto-card']}>
            <div className={styles['proyecto-content']}>
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <button className={styles['proyecto-btn']}>Ver proyecto</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
