import { z } from "zod";
import { ImageReadSchema, imageCreateSchema } from "../schemas";
import { DeepPartial } from "typeorm";

type ImageCreate = z.infer<typeof imageCreateSchema>;
type ImageRead = z.infer<typeof ImageReadSchema>;
type ImageUpdate = DeepPartial<ImageCreate>;

export { ImageCreate, ImageRead, ImageUpdate };
