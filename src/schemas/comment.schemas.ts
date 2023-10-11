import { z } from "zod";

const commentSchema = z.object({
    id: z.number().positive(),
    comment: z.string(),
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()),
    deletedAt: z.string().or(z.date()).nullable(),
});

const commentCreateSchema = commentSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
});

const commentReadSchema = commentSchema.array();

const commentUpdateSchema = commentSchema.partial();

export {
    commentSchema,
    commentCreateSchema,
    commentReadSchema,
    commentUpdateSchema,
};
