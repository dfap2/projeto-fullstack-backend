import { z } from "zod";

const addressSchema = z.object({
    id: z.number().positive(),
    zipCode: z.string().max(8),
    state: z.string().max(25),
    city: z.string().max(40),
    street: z.string().max(120),
    number: z.number().positive().nullish(),
    complement: z.string().max(50).nullish(),
});

const addressCreateSchema = addressSchema.omit({
    id: true,
});

const addressUpdateSchema = addressCreateSchema.partial();

export { addressSchema, addressCreateSchema, addressUpdateSchema };
