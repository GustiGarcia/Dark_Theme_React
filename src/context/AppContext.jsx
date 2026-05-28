import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false);
    const [contador, setContador] = useState(0);
    const [usuario, setUsuario] = useState(null);

    // CARRITO
    const [carrito, setCarrito] = useState([]);

    // LOGIN
    const login = () => {
        setUsuario("Gustavo Garcia");
    };

    const logout = () => {
        setUsuario(null);
    };

    // AGREGAR PRODUCTO
    const agregarProducto = (producto) => {
        setCarrito([...carrito, producto]);
    };

    // VACIAR CARRITO
    const vaciarCarrito = () => {
        setCarrito([]);
    };

    // TOTAL DEL CARRITO
    const total = carrito.reduce((acumulador, producto) => {
        return acumulador + producto.precio;
    }, 0);

    const tema = {
        fondo: darkMode ? "#242424" : "#ffffff",
        texto: darkMode ? "#ffffff" : "#242424"
    };

    return (
        <AppContext.Provider
            value={{
                darkMode,
                setDarkMode,
                tema,

                contador,
                setContador,

                usuario,
                setUsuario,
                login,
                logout,

                carrito,
                setCarrito,
                agregarProducto,
                vaciarCarrito,
                total
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;