import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entity";
import { AppError } from "../../errors/errors";
import { IReturncontact } from "../../interfaces/contacts.interfaces";
import { returnContactSchema } from "../../schemas/contacts.schemas";

const listContactService = async (
	contactId: string
): Promise<IReturncontact> => {
	const contactRepository: Repository<Contact> =
		AppDataSource.getRepository(Contact);

	const contact = await contactRepository.findOneBy({ id: contactId });

	if (!contact) {
		throw new AppError("Not found", 404);
	}

	const returnContact = returnContactSchema.parse(contact);

	return returnContact;
};

export default listContactService;
