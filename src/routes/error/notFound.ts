import { Router, Request, Response } from "express";
import { getError } from "../../utils/data";

const router: Router = Router();

// Ruta para manejar cualquier otro caso
router.use((req: Request, res: Response) => {
    const ErrorMessage = getError();

    const response = {
        ...ErrorMessage,
    };

    res.json(response);
});

export default {
    path: 'error',
    router,
};