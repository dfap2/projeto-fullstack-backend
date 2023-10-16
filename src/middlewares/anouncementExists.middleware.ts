import { NextFunction, Request, Response } from "express";
import { Anouncement } from "../entities";
import { anouncementRepository } from "../repositories";
import { AppError } from "../errors";

const anouncementExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const id: number = Number(req.params.id);

    const foundAnouncement: Anouncement | null =
        await anouncementRepository.findOneBy({
            id,
        });
    if (foundAnouncement === null)
        throw new AppError("Anouncement not found", 404);

    res.locals = { ...res.locals, foundAnouncement };

    return next();
};

export default anouncementExists;
