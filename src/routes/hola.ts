import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('¡Hola! Bienvenido a la ruta /saludos/hola');
});

export default {
    path: 'hola', 
    router,
};
