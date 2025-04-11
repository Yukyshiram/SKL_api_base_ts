# Next SKL > API - TypeScript

**Las malas ideas siempre son las mejores**  
~*Im_JVallejo*

Este proyecto es una API desarrollada en TypeScript con Express, diseñada para integrar funcionalidades como eliminación de fondos de imágenes, búsqueda en GitHub y más. Es parte de la continuación del proyecto **Next SKL**.

## Agradecimientos

¡Gracias por visitar este proyecto! Si te gustó, no olvides seguirme en mis redes sociales:  
- **Instagram**: [@Im_JVallejo](https://www.instagram.com/Im_JVallejo)  
- **LinkedIn**: [Im-JVallejo](https://www.linkedin.com/in/Im-JVallejo)  
- **Página Web**: [sklconnect.com](https://sklconnect.com)  

Tu apoyo es muy valioso. ¡Espero que este proyecto te sea útil!

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Rutas Disponibles](#rutas-disponibles)
- [Uso](#uso)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

---

## Requisitos

- Node.js (v16 o superior)
- npm o yarn
- Una clave de API válida para la funcionalidad de eliminación de fondo de imágenes.

---

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Im_JVallejo/Next_SKL_Api.git
   cd Next_SKL_Api
   ```
2. Instala las dependencias
   ```bash
   npm install
   ```
3. Configura las variables de entorno (si es necesario) en un archivo .env.
4. Compila el proyecto:
   ```bash
   npm run build
   ```

---

## Scripts Disponibles

En el archivo `package.json`, se encuentran los siguientes scripts:

- **`npm run build`**: Compila el proyecto TypeScript a JavaScript en la carpeta `dist`.
- **`npm run start`**: Inicia el servidor en modo producción ejecutando el archivo compilado `dist/index.js`.
- **`npm run dev`**: Inicia el servidor en modo desarrollo utilizando `ts-node-dev` para recarga automática al detectar cambios en el código fuente.

---

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **`public/`**: Contiene archivos estáticos que pueden ser servidos directamente al cliente.
- **`src/`**: Carpeta principal del código fuente.
  - **`commands/`**: Lógica para comandos específicos, como búsquedas o integraciones.
  - **`controllers/`**: Contiene la lógica de negocio para las rutas.
  - **`middleware/`**: Middlewares personalizados para validaciones o procesamiento de solicitudes.
  - **`models/`**: Modelos de datos (si se utiliza una base de datos).
  - **`routes/`**: Define las rutas de la API.
  - **`types/`**: Definiciones de tipos y estructuras para TypeScript.
  - **`utils/`**: Funciones auxiliares y constantes reutilizables.
  - **`index.ts`**: Archivo principal que inicializa el servidor Express.
- **`package.json`**: Contiene las dependencias, scripts y metadatos del proyecto.
- **`tsconfig.json`**: Configuración de TypeScript.
- **`README.md`**: Documentación del proyecto.

Esta estructura facilita la escalabilidad y el mantenimiento del proyecto.

---

## Rutas Disponibles

### Rutas Principales

- **`GET /`**  
  Ruta principal que da la bienvenida al usuario.

- **`GET /delete-bg`**  
  Elimina el fondo de una imagen.  
  **Parámetros**:

  - `image` (string): URL de la imagen a procesar.  
    **Ejemplo**:  
    curl "http://localhost:5000/delete-bg?image=https://telegra.ph/file/24fa902ead26340f3df2c.png"

- **`GET /search`**  
  Realiza una búsqueda simple.  
  **Parámetros**:

  - `text` (string): Texto a buscar.  
    **Ejemplo**:  
    curl "http://localhost:5000/search?text=example"

- **`GET /githubSearch`**  
  Busca repositorios en GitHub.  
  **Parámetros**:

  - `text` (string): Término de búsqueda.  
    **Ejemplo**:  
    curl "http://localhost:5000/githubSearch?text=express"

- **`GET /error`**  
  Muestra un mensaje de error para rutas no existentes.  
  **Ejemplo**:  
  curl "http://localhost:5000/error"

---

## Uso

### Ejemplo de Eliminación de Fondo

1. Asegúrate de que el servidor esté corriendo:
   ```bash
   npm run dev
   ```
2. Realiza una solicitud `GET` a la ruta `/delete-bg` con el parámetro `image`:
   ```bash
       curl "http://localhost:5000/delete-bg?image=https://telegra.ph/file/24fa902ead26340f3df2c.png" --output output.png
   ```
3. La imagen procesada se descargará como output.png.

---
## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Envía un pull request.

---
## Licencia

Este proyecto está bajo la licencia ISC. Consulta el archivo `LICENSE` para más detalles.