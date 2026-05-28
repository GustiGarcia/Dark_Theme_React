import { use, useContext } from "react";
// Importamos la "estación de radio" (el contexto)
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  // Sintonizamos el contexto para extraer lo que necesitamos
  const { darkMode, setDarkMode, tema } = useContext(AppContext);
  const { contador } = useContext(AppContext);
  const { usuario } = useContext(AppContext);
  const login = useContext(AppContext).login;
  const logout = useContext(AppContext).logout;

  return (
    // Aplicamos los colores globales al estilo del Navbar
    <nav style={{ backgroundColor: tema.fondo, color: tema.texto, padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>

      {usuario ?
        <p>Hola {usuario}</p>
        : <p>No logeado</p>}
      <h2>Mi Proyecto React</h2>

      {/* Botón que invierte el valor actual del Dark Mode */}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Cambiar a Claro" : "🌙 Cambiar a Oscuro"}
      </button>
      <p>Contador: {contador}</p>
    </nav>
  );
};

export default Navbar;