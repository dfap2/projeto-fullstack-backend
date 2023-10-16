import { Router } from "express";
import middlewares from "../middlewares";
import { anouncementCreateSchema, anouncementUpdateSchema } from "../schemas";
import { anouncementControllers } from "../controllers";

const anouncementRouter: Router = Router();

anouncementRouter.post(
    "",
    middlewares.verifyToken,
    middlewares.isAnouncer,
    middlewares.validateBody(anouncementCreateSchema),
    anouncementControllers.create
);

anouncementRouter.get("", anouncementControllers.read);

anouncementRouter.get(
    "/users/:id",
    middlewares.verifyToken,
    middlewares.userIdExists,
    anouncementControllers.retrieve
);

anouncementRouter.use(
    "/:id",
    middlewares.verifyToken,
    middlewares.isAnouncer,
    middlewares.anouncementExists
);

anouncementRouter.patch(
    "/:id",
    middlewares.validateBody(anouncementUpdateSchema),
    anouncementControllers.update
);

anouncementRouter.delete("/:id", anouncementControllers.destroy);

export default anouncementRouter;
