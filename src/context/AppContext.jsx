import { createContext, UseState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [darkMode, setDarkMode] = UseState(false);

    const tema = {
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#333",
    };  

return (
    <AppContext.Provider value={{ darkMode, setDarkMode, tema }}>
        {children}
    </AppContext.Provider>
);
};

export default AppProvider;