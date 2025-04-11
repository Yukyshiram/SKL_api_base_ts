import { Router, Request, Response } from "express";
import { handleSearchRequest } from "../../controllers/searchController";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    const response = handleSearchRequest(req);

    if (response.success) {
        res.json(response);
    } else {
        res.status(400).json(response);
    }
});

export default {
    path: "search",
    router,
};
