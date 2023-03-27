import { z } from "zod";
import { returnUserSchema } from "./users.schemas";

const contactSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	phoneNumber: z.string().min(8),
});

const returnContactSchema = contactSchema.extend({
	id: z.string().uuid(),
	createdAt: z.date(),
	user: returnUserSchema.optional(),
});

const returnMultipleContactsSchema = returnContactSchema.array();

const updateContactSchema = contactSchema.partial();

export {
	contactSchema,
	returnContactSchema,
	returnMultipleContactsSchema,
	updateContactSchema,
};
