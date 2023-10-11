import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories";
import { AppError } from "../errors";

const uniqueCpf = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const { cpf } = req.body;

    const foundEmail = await userRepository.findOneBy({ cpf });

    if (foundEmail) {
        throw new AppError("CPF already exists", 409);
    }

    return next();
};

export default uniqueCpf;
