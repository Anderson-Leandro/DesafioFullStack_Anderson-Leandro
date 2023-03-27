import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entity";
import {
	IReturncontact,
	IUpdateContact,
} from "../../interfaces/contacts.interfaces";
import { returnContactSchema } from "../../schemas/contacts.schemas";

const updateContactService = async (
	contactData: IUpdateContact,
	contactId: string
): Promise<IReturncontact> => {
	const contactRepository: Repository<Contact> =
		AppDataSource.getRepository(Contact);

	const contact = await contactRepository.findOneBy({ id: contactId });

	const updatedContact = contactRepository.create({
		...contact,
		...contactData,
	});

	await contactRepository.save(updatedContact);

	const returnContact = returnContactSchema.parse(updatedContact);

	return returnContact;
};

export default updateContactService;
