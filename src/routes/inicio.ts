import { Router, Request, Response } from 'express';
import { getGeneral } from '../utils/data';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    const generalInfo = getGeneral();
    res.json(generalInfo);
});

export default {
    path: '/',
    router,
};