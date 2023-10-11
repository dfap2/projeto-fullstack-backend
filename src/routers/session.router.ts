import { Router } from "express";
import middlewares from "../middlewares";
import { sessionController } from "../controllers";
import { sessionCreateSchema } from "../schemas";

const sessionRouter: Router = Router();

sessionRouter.post(
    "",
    middlewares.validateBody(sessionCreateSchema),
    sessionController.create
);

export default sessionRouter;
