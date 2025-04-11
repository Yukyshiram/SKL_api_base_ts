import { Router, Request, Response } from "express";
import { handleDeleteBgRequest } from "../../controllers/deleteBgController";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        await handleDeleteBgRequest(req, res);
    } catch (error) {
        console.error("Error en la ruta /delete-bg:", error);
        res.status(500).json({ error: "Ocurrió un error inesperado en el servidor." });
    }
});

export default {
    path: "delete-bg",
    router,
};