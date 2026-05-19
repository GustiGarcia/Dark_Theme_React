import { useContext } from "react";
import { AppContext } from "../context/AppContext"; // Asegurate de verificar bien tu ruta de carpetas

function Navbar() {
  // Sintonizamos la señal de nuestro contexto global
  const { darkMode, setDarkMode, tema } = useContext(AppContext);

  return (
    <nav
      style={{
        backgroundColor: tema.background,
        color: tema.text,
        padding: "1rem",
        display: "flex",
        justifyContent: "between",
        alignItems: "center",
        borderBottom: `1px solid ${darkMode ? "#333" : "#ccc"}`,
        transition: "all 0.3s ease", // Para que el cambio de color sea suave
      }}
    >
      <h2>Mi App Global</h2>
      
      {/* Botón que alterna el estado booleano entre true y false */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          backgroundColor: darkMode ? "#fff" : "#333",
          color: darkMode ? "#333" : "#fff",
          border: "none",
          padding: "0.5rem 1rem",
          cursor: "pointer",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
      >
        {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
      </button>
    </nav>
  );
}

export default Navbar;