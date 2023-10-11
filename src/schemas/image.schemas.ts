import { z } from "zod";

const imageSchema = z.object({
    id: z.number().positive(),
    imageUrl: z.string().max(255),
});

const imageCreateSchema = imageSchema.omit({ id: true });

export { imageSchema, imageCreateSchema };
