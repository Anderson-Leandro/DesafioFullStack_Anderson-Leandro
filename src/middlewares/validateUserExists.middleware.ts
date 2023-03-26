import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import AppDataSource from "../data-source";
import User from "../entities/user.entity";
import { AppError } from "../errors/errors";

const validateUserExistsMiddleware = async (
	req: Request,
	resp: Response,
	next: NextFunction
) => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const user = await userRepository.findOneBy({ id: req.params.id });

	if (!user) {
		throw new AppError("User not found!", 404);
	}

	return next();
};

export default validateUserExistsMiddleware;
