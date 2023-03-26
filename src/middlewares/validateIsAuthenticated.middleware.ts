import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/errors";
import jwt from "jsonwebtoken";
import "dotenv/config";

const validateIsAuthenticatedMiddleware = async (
	req: Request,
	resp: Response,
	next: NextFunction
) => {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) {
		throw new AppError("Invalid Token", 401);
	}

	jwt.verify(token, process.env.JWT_SECRET!, (error, decoded: any) => {
		if (error) {
			return resp.status(401).json(error);
		}

		req.user = {
			id: decoded.sub,
		};
	});

	return next();
};

export default validateIsAuthenticatedMiddleware;
