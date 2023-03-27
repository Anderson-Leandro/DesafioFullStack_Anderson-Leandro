import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import AppDataSource from "../data-source";
import Contact from "../entities/contacts.entity";
import { AppError } from "../errors/errors";

const validateContactExistsMiddleware = async (
	req: Request,
	resp: Response,
	next: NextFunction
) => {
	const contactRepository: Repository<Contact> =
		AppDataSource.getRepository(Contact);

	const contact = await contactRepository.findOneBy({ id: req.params.id });

	if (!contact) {
		throw new AppError("Contact not found!", 404);
	}

	return next();
};

export default validateContactExistsMiddleware;
