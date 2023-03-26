import { z } from "zod";

const userSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	password: z.string().min(8),
	phoneNumber: z.string().min(8),
});

const returnUserSchema = userSchema
	.extend({
		id: z.string().uuid(),
		createdAt: z.date(),
		contacts: z.any(),
	})
	.omit({ password: true });

const returnMultipleUsersSchema = returnUserSchema.array();

const updateUserSchema = userSchema.partial();

export {
	userSchema,
	returnUserSchema,
	returnMultipleUsersSchema,
	updateUserSchema,
};
