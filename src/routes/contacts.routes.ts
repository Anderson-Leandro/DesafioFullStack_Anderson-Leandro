import { Router } from "express";
import {
	createContactsController,
	listAllContactsController,
} from "../controllers/contacts.controllers";

const contactRoutes: Router = Router();

contactRoutes.post("", createContactsController);
contactRoutes.get("", listAllContactsController);

export default contactRoutes;
