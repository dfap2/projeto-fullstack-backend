import { z } from "zod";
import { AccountType } from "../entities";
import { addressCreateSchema, addressSchema } from "./address.schemas";

const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(120),
    email: z.string().max(120),
    password: z.string().max(120),
    cpf: z.string().max(11),
    phoneNumber: z.string().max(11),
    birthDate: z.string().or(z.date()),
    account: z.nativeEnum(AccountType).default(AccountType.COMPRADOR),
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()),
    deletedAt: z.string().or(z.date()).nullable(),
});

const userCreateSchema = userSchema
    .omit({
        id: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
    })
    .extend({
        address: addressCreateSchema,
    });

const userReturnSchema = userSchema.omit({ password: true }).extend({
    address: addressSchema,
});

const userUpdateSchema = userCreateSchema.partial();

export { userSchema, userCreateSchema, userReturnSchema, userUpdateSchema };
