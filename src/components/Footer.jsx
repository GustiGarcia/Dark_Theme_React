import React from 'react';

function Footer() {
  // Obtenemos el año actual dinámicamente para no tener que actualizarlo a mano
  const anioActual = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <p>&copy; {anioActual} Mi Aplicación React. Todos los derechos reservados.</p>
    </footer>
  );
}

// Estilos básicos en línea para que quede abajo y ordenado
const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center',
    padding: '15px 0',
    position: 'fixed', // Lo mantiene fijo abajo (opcional, depende de tu diseño)
    left: 0,
    bottom: 0,
    width: 100,
  }
};

export default Footer;