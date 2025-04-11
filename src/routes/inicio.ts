import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('¡Hola! Bienvenido a la ruta principal. Puedes acceder a otras rutas como /search o /delete-bg para más funcionalidades. Para saber más sobre mi proyecto NextSKL, visita nuestra documentación o contáctanos.');
});

export default {
    path: '/',
    router,
}