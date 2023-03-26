import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/errors";

const validateIsOwnerMiddleware = async (
	req: Request,
	resp: Response,
	next: NextFunction
) => {
	if (req.params.id === req.user.id) {
		return next();
	}

	throw new AppError("Not authorized", 401);
};

export default validateIsOwnerMiddleware;
