import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import { IUpdateUser, IUser } from "../interfaces/users.interfaces";
import listAllUsersService from "../services/users/listAllUsers.service";
import listUserService from "../services/users/listUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import updateUserService from "../services/users/updateUser.service";

const createUserController = async (req: Request, resp: Response) => {
	const userData: IUser = req.body;
	const response = await createUserService(userData);
	return resp.status(201).send(response);
};

const listAllUsersController = async (req: Request, resp: Response) => {
	const usersList = await listAllUsersService();
	return resp.status(200).send(usersList);
};

const listUserController = async (req: Request, resp: Response) => {
	const userId: string = req.params.id;
	const user = await listUserService(userId);
	return resp.status(200).send(user);
};

const deleteUserController = async (req: Request, resp: Response) => {
	const userId: string = req.params.id;
	await deleteUserService(userId);
	return resp.status(204).send();
};

const updateUserController = async (req: Request, resp: Response) => {
	const userId: string = req.params.id;
	const userData: IUpdateUser = req.body;
	const updatedUser = await updateUserService(userData, userId);
	return resp.status(200).send(updatedUser);
};

export {
	createUserController,
	listAllUsersController,
	listUserController,
	deleteUserController,
	updateUserController,
};
