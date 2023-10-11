import { NextFunction, Request, Response } from "express";
import { commentRepository } from "../repositories";
import { Comment } from "../entities";
import { AppError } from "../errors";

const commentOwner = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const comment: Comment | null = await commentRepository.findOneBy({
        id: Number(req.params.id),
    });

    console.log(comment!.user);

    if (res.locals.foundUser === comment!.anouncement.user) {
        return next();
    } else if (res.locals.foundUser !== comment!.user) throw new AppError("");

    return next();
};

export default commentOwner;
