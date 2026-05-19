import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Home() {
  // Traemos los estilos del tema global
  const { tema } = useContext(AppContext);

  return (
    <main
      style={{
        backgroundColor: tema.background,
        color: tema.text,
        minHeight: "70vh", // Para que ocupe buen espacio entre el navbar y el footer
        padding: "2rem",
        textAlign: "center",
        transition: "all 0.3s ease",
      }}
    >
      <h1>¡Bienvenido a la Página Principal!</h1>
      <p>
        Este componente está escuchando de forma global si el Dark Mode está
        activo o no, adaptando sus estilos al instante sin recibir props.
      </p>
    </main>
  );
}

export default Home;