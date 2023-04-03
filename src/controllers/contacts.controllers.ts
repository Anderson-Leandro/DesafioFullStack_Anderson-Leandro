import { Request, Response } from "express";
import { IContact, IUpdateContact } from "../interfaces/contacts.interfaces";
import createContactsService from "../services/contacts/createContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";
import listAllContactsService from "../services/contacts/listAllContacts.service";
import listContactService from "../services/contacts/listContact.service";
import updateContactService from "../services/contacts/updateContact.service";

const createContactsController = async (req: Request, resp: Response) => {
	const contactData: IContact = req.body;
	const userId: string = req.user.id;
	const newContact = await createContactsService(contactData, userId);

	return resp.status(201).send(newContact);
};

const listAllContactsController = async (req: Request, resp: Response) => {
	const userId = req.user.id;
	const contacts = await listAllContactsService(userId);
	return resp.status(200).send(contacts);
};

const listContactController = async (req: Request, resp: Response) => {
	const contactId: string = req.params.id;
	const contacts = await listContactService(contactId);

	return resp.status(200).send(contacts);
};

const deleteContactController = async (req: Request, resp: Response) => {
	const contactId: string = req.params.id;
	await deleteContactService(contactId);

	return resp.status(204).send();
};

const updateContactController = async (req: Request, resp: Response) => {
	const contactId: string = req.params.id;
	const contactData: IUpdateContact = req.body;
	const contact = await updateContactService(contactData, contactId);

	return resp.status(200).send(contact);
};

export {
	createContactsController,
	listAllContactsController,
	listContactController,
	deleteContactController,
	updateContactController,
};
