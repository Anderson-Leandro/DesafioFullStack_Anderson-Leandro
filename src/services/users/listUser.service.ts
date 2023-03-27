import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { IReturnUser } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schemas";

const listUserService = async (userId: string): Promise<IReturnUser> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const user = await userRepository.findOne({
		where: { id: userId },
		relations: { contacts: true },
	});

	const returnUser = returnUserSchema.parse(user);

	return returnUser;
};

export default listUserService;
