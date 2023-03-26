import { Router } from "express";
import {
	createUserController,
	deleteUserController,
	listAllUsersController,
	listUserController,
	updateUserController,
} from "../controllers/users.controllers";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import validateEmailAlreadyExistsMiddleware from "../middlewares/validateEmailAlreadyExists.middleware";
import validateIsAuthenticatedMiddleware from "../middlewares/validateIsAuthenticated.middleware";
import validateIsOwnerMiddleware from "../middlewares/validateIsOwner.middleware";
import validateUserExistsMiddleware from "../middlewares/validateUserExists.middleware";
import { updateUserSchema, userSchema } from "../schemas/users.schemas";

const userRoutes: Router = Router();

userRoutes.post(
	"",
	validateDataMiddleware(userSchema),
	validateEmailAlreadyExistsMiddleware,
	createUserController
);
userRoutes.get("", validateIsAuthenticatedMiddleware, listAllUsersController);
userRoutes.get(
	"/:id",
	validateIsAuthenticatedMiddleware,
	validateUserExistsMiddleware,
	validateIsOwnerMiddleware,
	listUserController
);
userRoutes.delete(
	"/:id",
	validateIsAuthenticatedMiddleware,
	validateUserExistsMiddleware,
	validateIsOwnerMiddleware,
	deleteUserController
);
userRoutes.patch(
	"/:id",
	validateIsAuthenticatedMiddleware,
	validateDataMiddleware(updateUserSchema),
	validateUserExistsMiddleware,
	validateIsOwnerMiddleware,
	validateEmailAlreadyExistsMiddleware,
	updateUserController
);

export default userRoutes;
