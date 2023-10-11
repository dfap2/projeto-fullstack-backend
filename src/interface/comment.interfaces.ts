import { z } from "zod";
import { DeepPartial } from "typeorm";
import { commentCreateSchema, commentReadSchema } from "../schemas";
import { Comment } from "../entities";

type CommentCreate = z.infer<typeof commentCreateSchema>;
type CommentRead = z.infer<typeof commentReadSchema>;
type CommentUpdate = DeepPartial<Comment>;

export { CommentCreate, CommentRead, CommentUpdate };
