import { Request, Response } from "express";
import { IContact } from "../interfaces/contacts.interfaces";
import createContactsService from "../services/contacts/createContact.service";
import listAllContactsService from "../services/contacts/listAllContacts.service";

const createContactsController = async (req: Request, resp: Response) => {
	const contactData: IContact = req.body;
	const userId = "0bd0c31e-3cea-4cfd-9d97-20eaead9adc8";
	const newContact = await createContactsService(contactData, userId);

	return resp.status(201).send(newContact);
};

const listAllContactsController = async (req: Request, resp: Response) => {
	const contacts = await listAllContactsService();

	return resp.status(200).send(contacts);
};

export { createContactsController, listAllContactsController };
