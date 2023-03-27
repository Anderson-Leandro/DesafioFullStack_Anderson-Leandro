import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import AppDataSource from "../data-source";
import Contact from "../entities/contacts.entity";
import { AppError } from "../errors/errors";

const validateContactEmailIsDuplicatedMiddleware = async (
	req: Request,
	resp: Response,
	next: NextFunction
) => {
	const contactRepository: Repository<Contact> =
		AppDataSource.getRepository(Contact);

	const email: string = req.body.email;
	const userId: string = req.user.id;

	const contact = await contactRepository
		.createQueryBuilder("contacts")
		.innerJoinAndSelect("contacts.user", "users")
		.where("contacts.email = :email", { email })
		.andWhere("users.id = :userId", { userId })
		.getOne();

	if (contact) {
		if (contact.id === req.params.id) {
			return next();
		}
		throw new AppError("You already have a contact with this email", 400);
	}

	return next();
};

export default validateContactEmailIsDuplicatedMiddleware;
