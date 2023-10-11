import { z } from "zod";
import { FuelType } from "../entities";
import { imageCreateSchema, imageSchema } from "./image.schemas";

const anouncementSchema = z.object({
    id: z.number().positive(),
    brand: z.string().max(20),
    model: z.string().max(20),
    year: z.number().positive(),
    fuel: z.nativeEnum(FuelType),
    description: z.string(),
    price: z.number().positive(),
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()),
    deletedAt: z.string().or(z.date()).nullable(),
});

const anouncementCreateSchema = anouncementSchema
    .extend({
        images: imageCreateSchema.array(),
    })
    .omit({
        id: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
    });

const anouncementReturnSchema = anouncementSchema.extend({
    images: imageSchema.array(),
});

const anouncementUpdateSchema = anouncementCreateSchema.partial();

export {
    anouncementSchema,
    anouncementCreateSchema,
    anouncementReturnSchema,
    anouncementUpdateSchema,
};
