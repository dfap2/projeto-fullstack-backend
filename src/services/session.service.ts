import { compare } from "bcryptjs";
import { AppError } from "../errors";
import { SessionCreate, SessionReturn } from "../interface";
import { userRepository } from "../repositories";
import { sign } from "jsonwebtoken";
import { User } from "../entities";

const create = async (payload: SessionCreate): Promise<SessionReturn> => {
    const user: User | null = await userRepository.findOneBy({
        email: payload.email,
    });

    if (!user) throw new AppError("Invalid credentials", 401);

    const samePassword: boolean = await compare(
        payload.password,
        user.password
    );

    if (!samePassword) throw new AppError("Invalid credentials", 401);

    const token: string = sign(
        { email: user.email, account: user.account },
        process.env.SECRET_KEY!,
        {
            subject: user.id.toString(),
            expiresIn: process.env.EXPIRES_IN!,
        }
    );

    return { token };
};

export default { create };
