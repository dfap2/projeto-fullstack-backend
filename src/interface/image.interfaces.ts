import { z } from "zod";
import { imageCreateSchema } from "../schemas";

type ImageCreate = z.infer<typeof imageCreateSchema>;

export { ImageCreate };
