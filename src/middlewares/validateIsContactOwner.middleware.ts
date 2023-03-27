import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import AppDataSource from "../data-source";
import Contact from "../entities/contacts.entity";
import { AppError } from "../errors/errors";

const validateIsContactOwnerMiddleware = async (
	req: Request,
	resp: Response,
	next: NextFunction
) => {
	const contactRepository: Repository<Contact> =
		AppDataSource.getRepository(Contact);

	const contact = await contactRepository.findOne({
		where: { id: req.params.id },
		relations: { user: true },
	});

	if (req.user.id === contact!.user.id) {
		return next();
	}

	throw new AppError("Not authorized", 401);
};

export default validateIsContactOwnerMiddleware;
