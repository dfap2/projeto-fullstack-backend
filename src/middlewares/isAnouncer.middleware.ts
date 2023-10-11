import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { userRepository } from "../repositories";
import { AppError } from "../errors";

const isAnouncer = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const id: number = Number(res.locals.decoded.sub);

    const foundAnouncer: User | null = await userRepository.findOneBy({ id });

    if (!foundAnouncer) throw new AppError("User not found", 404);
    if (foundAnouncer.account === "comprador")
        throw new AppError("You have a customer account.", 403);

    res.locals = { ...res.locals, foundAnouncer };

    return next();
};

export default isAnouncer;
