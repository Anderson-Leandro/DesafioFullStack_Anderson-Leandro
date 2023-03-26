import { userSchema, returnUserSchema } from "../schemas/users.schemas";
import { z } from "zod";
import { DeepPartial } from "typeorm";

type IUser = z.infer<typeof userSchema>;
type IReturnUser = z.infer<typeof returnUserSchema>;
type IUpdateUser = DeepPartial<IUser>;

export { IUser, IReturnUser, IUpdateUser };
