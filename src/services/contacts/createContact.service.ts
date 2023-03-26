import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/errors";
import { IContact, IReturncontact } from "../../interfaces/contacts.interfaces";
import { returnContactSchema } from "../../schemas/contacts.schemas";

const createContactsService = async (
	contactData: IContact,
	userId: string
): Promise<any> => {
	const contactRepository: Repository<Contact> =
		AppDataSource.getRepository(Contact);

	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const user = await userRepository.findOneBy({ id: userId });

	if (!user) {
		throw new AppError("User not found!", 404);
	}

	const contact = contactRepository.create({ ...contactData });

	const newContact = await contactRepository.save({ ...contact, user });

	const returnContact = returnContactSchema.parse(newContact);

	return returnContact;
};

export default createContactsService;
