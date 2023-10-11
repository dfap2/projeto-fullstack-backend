import { Request, Response } from "express";
import { commentServices } from "../services";
import { Comment } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
    const comment: Comment = await commentServices.create(req.body);

    return res.status(201).json(comment);
};

// const retrieve = async (req: Request, res: Response): Promise<Response> => {
//     const comments = await ()
// }

const update = async (req: Request, res: Response): Promise<Response> => {
    const payload = req.body;

    const updatedComment: Comment = await commentServices.update(
        payload,
        res.locals.foundComment
    );

    return res.status(200).json(updatedComment);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
    await commentServices.destroy(Number(req.params.id));

    return res.status(204).json();
};

export default { create, update, destroy };
