import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Home() {
  // Traemos los estilos del tema global
  const { tema } = useContext(AppContext);
  const { contador,setContador } = useContext(AppContext);

  const sumar = () => {
    setContador(contador + 1);
  };

  return (
    <main
      style={{
        backgroundColor: tema.fondo,
        color: tema.texto,
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
      <div>
      <p>Contador: {contador}</p>

      <button onClick={sumar}>
        +1
      </button></div>
    </main>
  );
}

export default Home;