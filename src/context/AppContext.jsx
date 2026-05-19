import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const tema = {
        // Si darkMode es true, usa gris oscuro. Si es false, usa blanco.
        fondo: darkMode ? "#242424" : "#ffffff",
        // Si darkMode es true, el texto es blanco. Si es false, es oscuro.
        texto: darkMode ? "#ffffff" : "#242424"
    };

    return (
        <AppContext.Provider value={{ darkMode, setDarkMode, tema }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
