import express, { Application, Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

import { responseHandler } from './middelware/responseHandler';

const app: Application = express();
const PORT = 5000;

app.use(express.json());
app.use(responseHandler);

const loadRoutes = (directory: string, app: Application): void => {
  fs.readdirSync(directory).forEach((file) => {
    const fullPath = path.join(directory, file);

    if (fs.statSync(fullPath).isDirectory()) {
      loadRoutes(fullPath, app); 
    } else if (file.endsWith('.ts') || file.endsWith('.js')) {
      const route = require(fullPath).default;

      if (route?.path && route?.router) {
        const routePath = route.path.startsWith('/') ? route.path : `/${route.path}`;
        app.use(routePath, route.router);
        console.log(`Ruta cargada: ${routePath}`);
      }
    }
  });
};

loadRoutes(path.join(__dirname, 'routes'), app);

// Manejador de errores para rutas no existentes
app.use((req: Request, res: Response, next: NextFunction) => {
  const errorRoute = require('./routes/error/notFound').default;
  req.url = '/error';
  errorRoute.router(req, res, next);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
