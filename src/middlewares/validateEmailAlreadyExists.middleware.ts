import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import AppDataSource from "../data-source";
import User from "../entities/user.entity";
import { AppError } from "../errors/errors";

const validateEmailAlreadyExistsMiddleware = async (
	req: Request,
	resp: Response,
	next: NextFunction
) => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const user = await userRepository.findOneBy({ email: req.body.email });

	if (user) {
		throw new AppError("This email already being used", 400);
	}

	return next();
};

export default validateEmailAlreadyExistsMiddleware;
