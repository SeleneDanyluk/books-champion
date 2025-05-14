import { useState } from "react";

// Importa el contexto de autenticación previamente definido
import { AuthenticationContext } from "../auth.context";

// Obtiene el token del localStorage si ya existe
const tokenValue = localStorage.getItem("book-champions-token");

// Define y exporta el proveedor del contexto de autenticación
export const AuthenticationContextProvider = ({ children }) => {
    // Estado local para guardar el token actual
    const [token, setToken] = useState(tokenValue);

    // Función para iniciar sesión: guarda el token y actualiza el estado
    const handleUserLogin = (token) => {
        localStorage.setItem("book-champions-token", token);
        setToken(token);
    }

    // Función para cerrar sesión: elimina el token y actualiza el estado
    const handleUserLogout = () => {
        localStorage.removeItem("book-champions-token");
        setToken(null);
    }

    // Provee el contexto a los componentes hijos
    return (
        <AuthenticationContext.Provider value={{ token, handleUserLogin, handleUserLogout }}>
            {children}
        </AuthenticationContext.Provider>
    );
};
