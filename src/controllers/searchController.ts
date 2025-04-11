import { Request } from "express";
import { defaultMessages } from "../utils/messages";

// Función para manejar la lógica de /search
export const handleSearchRequest = (req: Request) => {
  const { text } = req.query;

  if (typeof text === "string") {
    if (text === "") {
      return {
        success: true,
        message: defaultMessages.welcome("search"),
      };
    } else {
      return {
        success: true,
        message: `¡Hola! Bienvenido a la ruta /search con el parámetro 'text' igual a '${text}'.`,
      };
    }
  }

  // Si 'text' no es válido
  return {
    success: false,
    error: defaultMessages.parameterMissing,
  };
};
