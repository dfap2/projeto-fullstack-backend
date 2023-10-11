import { z } from "zod";
import { DeepPartial } from "typeorm";
import { Anouncement } from "../entities";
import { anouncementCreateSchema, anouncementReturnSchema } from "../schemas";

type AnouncementCreate = z.infer<typeof anouncementCreateSchema>;
type AnouncementReturn = z.infer<typeof anouncementReturnSchema>;
type AnouncementUpdate = DeepPartial<Anouncement>;

export { AnouncementCreate, AnouncementReturn, AnouncementUpdate };
