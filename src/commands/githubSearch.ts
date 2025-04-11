import axios from 'axios';
import { GitHubSearchResult } from '../types/git_data';

const procesSearchGithub = async (query: string) => {
    try {

        const apiUrl = `https://api.github.com/search/repositories?q=${query}`;

        const headers = {
            "User-Agent": "ghp_" // Cambia esto por tu token de acceso personal
        };

        const response = await axios.get(apiUrl, { headers });

        if (response.status === 200) {
            const data = response.data as GitHubSearchResult;

            // Verificar si no se encontraron resultados
            if (data.total_count === 0) {
                return {
                    "GitHubSearch": {
                        "info": "No se encontraron resultados."
                    }
                };
            }

            // Construir el mensaje con los detalles del repositorio
            const resultadoGitHub = {
                "GitHubSearch": {
                    "Nombre": data.items[0].name,
                    "Descripción": data.items[0].description || "Sin descripción",
                    "Estrellas": data.items[0].stargazers_count,
                    "Forks": data.items[0].forks,
                    "Creado": new Date(data.items[0].created_at).toLocaleDateString(),
                    "Actualizado": new Date(data.items[0].updated_at).toLocaleDateString(),
                    "Link": data.items[0].html_url,
                    "Avatar": data.items[0].owner.avatar_url
                }
            };

            return resultadoGitHub;
        } else {
            return {
                "GitHubSearch": {
                    "info": "No se pudo acceder a la API de GitHub."
                }
            };
        }

    } catch (error) {
        return {
            error: 'Error al procesar la búsqueda'
        };
    }
}

export { procesSearchGithub };