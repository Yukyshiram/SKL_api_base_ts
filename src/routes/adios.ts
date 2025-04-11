import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('¡Adiós! Gracias por visitar /saludos/adios');
});

export default {
    path: 'adios', 
    router,
};
