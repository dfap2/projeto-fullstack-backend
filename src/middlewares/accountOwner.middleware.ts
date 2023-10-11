import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const accountOwner = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const tokenId: number = Number(res.locals.decoded.sub);
    const userRequestId: number = Number(req.params.id);

    if (tokenId !== userRequestId)
        throw new AppError("You can not update another user account.", 403);

    return next();
};

export default accountOwner;
