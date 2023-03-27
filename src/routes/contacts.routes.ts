import { Router } from "express";
import {
	createContactsController,
	deleteContactController,
	listAllContactsController,
	listContactController,
	updateContactController,
} from "../controllers/contacts.controllers";
import validateContactEmailIsDuplicatedMiddleware from "../middlewares/validateContactEmailIsDuplicated.middleware";
import validateContactExistsMiddleware from "../middlewares/validateContactExists.middleware";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import validateIsAuthenticatedMiddleware from "../middlewares/validateIsAuthenticated.middleware";
import validateIsContactOwnerMiddleware from "../middlewares/validateIsContactOwner.middleware";
import {
	contactSchema,
	updateContactSchema,
} from "../schemas/contacts.schemas";

const contactRoutes: Router = Router();

contactRoutes.post(
	"",
	validateIsAuthenticatedMiddleware,
	validateDataMiddleware(contactSchema),
	validateContactEmailIsDuplicatedMiddleware,
	createContactsController
);
contactRoutes.get(
	"",
	validateIsAuthenticatedMiddleware,
	listAllContactsController
);

contactRoutes.get(
	"/:id",
	validateIsAuthenticatedMiddleware,
	validateContactExistsMiddleware,
	validateIsContactOwnerMiddleware,
	listContactController
);

contactRoutes.delete(
	"/:id",
	validateIsAuthenticatedMiddleware,
	validateContactExistsMiddleware,
	validateIsContactOwnerMiddleware,
	deleteContactController
);

contactRoutes.patch(
	"/:id",
	validateIsAuthenticatedMiddleware,
	validateContactExistsMiddleware,
	validateIsContactOwnerMiddleware,
	validateContactEmailIsDuplicatedMiddleware,
	validateDataMiddleware(updateContactSchema),
	updateContactController
);

export default contactRoutes;
