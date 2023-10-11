import { z } from "zod";
import { userCreateSchema, userReturnSchema } from "../schemas";
import { DeepPartial } from "typeorm";
import { User } from "../entities";

type UserCreate = z.infer<typeof userCreateSchema>;
type UserReturn = z.infer<typeof userReturnSchema>;
type UserUpdate = DeepPartial<User>;

export { UserCreate, UserReturn, UserUpdate };
