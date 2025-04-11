import { Request } from "express";
import { procesSearchGithub } from "../commands/githubSearch";

// Función para manejar la lógica de /githubSearch
export const handleGithubSearchRequest = async (req: Request) => {
  const { text } = req.query;

  if (typeof text === "string") {
    if (text.trim() === "") {
      return {
        success: false,
        error: "El parámetro 'text' está vacío. Por favor, proporcione un término de búsqueda válido.",
      };
    }

    try {
      const resultados = await procesSearchGithub(text.trim());

      return {
        success: true,
        data: resultados,
      };
    } catch (error) {
      console.error("Error al procesar la búsqueda de GitHub:", error);

      return {
        success: false,
        error: "Ocurrió un error al procesar la búsqueda en GitHub. Inténtelo más tarde.",
      };
    }
  }

  // Si 'text' no es válido
  return {
    success: false,
    error: "El parámetro 'text' es requerido y debe ser una cadena de texto.",
  };
};
