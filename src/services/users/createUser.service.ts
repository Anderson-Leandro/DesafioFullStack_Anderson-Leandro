import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IUser, IReturnUser } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schemas";

const createUserService = async (userData: IUser): Promise<IReturnUser> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const user = userRepository.create(userData);

	await userRepository.save(user);

	const newUser = returnUserSchema.parse(user);

	return newUser;
};

export default createUserService;
