import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/errors";
import { IReturnUser, IUpdateUser } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schemas";

const updateUserService = async (
	userData: IUpdateUser,
	userId: string
): Promise<IReturnUser> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const user = await userRepository.findOneBy({ id: userId });

	if (!user) {
		throw new AppError("User not found", 404);
	}

	const updatedUser = userRepository.create({
		...user,
		...userData,
	});

	await userRepository.save(updatedUser);

	const returnUser = returnUserSchema.parse(updatedUser);

	return returnUser;
};

export default updateUserService;
