import { z } from "zod";
import { DeepPartial } from "typeorm";
import { addressCreateSchema, addressUpdateSchema } from "../schemas";
import { Address } from "../entities";

type AddressCreate = z.infer<typeof addressCreateSchema>;
type AddressUpdate = z.infer<typeof addressUpdateSchema>;
type AddressUpdateSchema = DeepPartial<Address>;

export { AddressCreate, AddressUpdate, AddressUpdateSchema };
