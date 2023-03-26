import { z } from "zod";
import {
	contactSchema,
	returnContactSchema,
} from "../schemas/contacts.schemas";

type IContact = z.infer<typeof contactSchema>;
type IReturncontact = z.infer<typeof returnContactSchema>;

export { IContact, IReturncontact };
