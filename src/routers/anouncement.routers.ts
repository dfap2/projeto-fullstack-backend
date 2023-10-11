import { Router } from "express";
import middlewares from "../middlewares";
import { anouncementCreateSchema } from "../schemas";
import { anouncementControllers } from "../controllers";

const anouncementRouter: Router = Router();

anouncementRouter.post(
    "",
    middlewares.validateBody(anouncementCreateSchema),
    middlewares.verifyToken,
    middlewares.isAnouncer,
    anouncementControllers.create
);

export default anouncementRouter;
