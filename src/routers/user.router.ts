import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";
import { userControllers } from "../controllers";

const userRouter: Router = Router();

userRouter.post(
    "",
    middlewares.validateBody(userCreateSchema),
    middlewares.uniqueCpf,
    middlewares.uniqueUserEmail,
    middlewares.uniquePhoneNumber,
    userControllers.create
);

userRouter.use(
    "/:id",
    middlewares.userIdExists,
    middlewares.verifyToken,
    middlewares.accountOwner
);

userRouter.patch(
    "/:id",
    middlewares.validateBody(userUpdateSchema),
    userControllers.update
);

userRouter.delete("/:id", userControllers.destroy);

export default userRouter;
