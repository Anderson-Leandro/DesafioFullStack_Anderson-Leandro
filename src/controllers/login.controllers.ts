import { Request, Response } from "express";
import loginService from "../services/login/login.service";

const loginController = async (req: Request, resp: Response) => {
	const token = await loginService(req.body);

	return resp.status(200).send(token);
};

export default loginController;
