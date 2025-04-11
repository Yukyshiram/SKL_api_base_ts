import { Router, Request, Response } from "express";
import { handleGithubSearchRequest } from "../../controllers/githubSearchController";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
    const response = await handleGithubSearchRequest(req);

    if (response.success) {
        res.status(200).json(response.data);
    } else {
        res.status(400).json({ error: response.error });
    }
});

export default {
    path: "githubSearch",
    router,
};
