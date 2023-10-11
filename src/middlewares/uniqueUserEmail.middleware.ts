import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { userRepository } from "../repositories";

const uniqueUserEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const { email } = req.body;

    const foundEmail = await userRepository.findOneBy({ email });

    if (foundEmail) throw new AppError("Email already exists", 409);

    return next();
};

export default uniqueUserEmail;
