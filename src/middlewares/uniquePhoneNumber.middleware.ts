import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories";
import { AppError } from "../errors";

const uniquePhoneNumber = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const { phoneNumber } = req.body;

    const foundEmail = await userRepository.findOneBy({ phoneNumber });

    if (foundEmail) {
        throw new AppError("Phone number already exists", 409);
    }

    return next();
};

export default uniquePhoneNumber;
