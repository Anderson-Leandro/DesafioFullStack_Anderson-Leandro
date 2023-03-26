import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entity";
import { IReturncontact } from "../../interfaces/contacts.interfaces";
import { returnMultipleContactsSchema } from "../../schemas/contacts.schemas";

const listAllContactsService = async (): Promise<IReturncontact[]> => {
	const contactRepository: Repository<Contact> =
		AppDataSource.getRepository(Contact);

	const contacts = await contactRepository.find({
		relations: { user: true },
	});

	const returnContacts = returnMultipleContactsSchema.parse(contacts);

	return returnContacts;
};

export default listAllContactsService;
