import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IReturnUser } from "../../interfaces/users.interfaces";
import { returnMultipleUsersSchema } from "../../schemas/users.schemas";

const listAllUsersService = async (): Promise<IReturnUser[]> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const users = await userRepository.find({ relations: { contacts: true } });

	const returnUsers = returnMultipleUsersSchema.parse(users);

	return returnUsers;
};

export default listAllUsersService;
