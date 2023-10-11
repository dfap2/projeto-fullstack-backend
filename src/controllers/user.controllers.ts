import { Request, Response } from "express";
import { UserReturn } from "../interface";
import userServices from "../services/user.services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const user: UserReturn = await userServices.create(req.body);

    return res.status(201).json(user);
};

const update = async (req: Request, res: Response): Promise<Response> => {
    const payload = req.body;

    const updatedUser: UserReturn = await userServices.update(
        payload,
        res.locals.foundUser
    );

    return res.status(200).json(updatedUser);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
    await userServices.destroy(res.locals.foundUser);

    return res.status(204).json();
};

export default { create, update, destroy };
