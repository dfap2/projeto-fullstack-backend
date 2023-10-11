import { Router } from "express";
import middlewares from "../middlewares";
import { commentCreateSchema } from "../schemas";
import { commentControllers } from "../controllers";

const commentRouter: Router = Router();

commentRouter.post(
    "",
    middlewares.verifyToken,
    middlewares.validateBody(commentCreateSchema),
    commentControllers.create
);

commentRouter.use("/:id", middlewares.verifyToken);

commentRouter.patch(
    "/:id",
    middlewares.validateBody,
    middlewares.commentOwner,
    commentControllers.update
);

export default commentRouter;
