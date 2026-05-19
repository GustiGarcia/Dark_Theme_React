import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';


function Footer() {
  // Obtenemos el año actual dinámicamente para no tener que actualizarlo a mano
  const anioActual = new Date().getFullYear();
  const {tema} = useContext(AppContext);

  return (
    <footer style={{backgroundColor: tema.fondo, color: tema.texto,textAlign: 'center', padding: '15px 0', position: 'fixed', left: 0, bottom: 0, width: '100%'}}>
      <p>&copy; {anioActual} Mi Aplicación React. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;