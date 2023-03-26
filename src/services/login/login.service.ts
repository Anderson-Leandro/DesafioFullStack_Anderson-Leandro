import { ILogin } from "../../interfaces/login.interfaces";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/errors";
import "dotenv/config";

const loginService = async ({ email, password }: ILogin) => {
	const userRepository = AppDataSource.getRepository(User);

	const user = await userRepository.findOneBy({ email: email });

	if (!user) {
		throw new AppError("Wrong email/password", 401);
	}

	if (!bcryptjs.compareSync(password, user.password)) {
		throw new AppError("Wrong email/password", 401);
	}

	const token = jwt.sign({ email: email }, process.env.JWT_SECRET!, {
		subject: user.id,
		expiresIn: "1d",
	});

	return { token };
};

export default loginService;
