import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entity";
import { AppError } from "../../errors/errors";

const deleteContactService = async (contactId: string): Promise<void> => {
	const contactRepository: Repository<Contact> =
		AppDataSource.getRepository(Contact);

	const contact = await contactRepository.findOneBy({ id: contactId });

	if (!contact) {
		throw new AppError("Not found", 404);
	}

	contactRepository.remove(contact);

	return;
};

export default deleteContactService;
