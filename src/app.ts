import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors/errors";
import userRoutes from "./routes/users.routes";
import contactRoutes from "./routes/contacts.routes";
import loginRoutes from "./routes/login.routes";

const app: Application = express();

app.use(express.json());

app.use("/users", userRoutes);

app.use("/contacts", contactRoutes);

app.use("/login", loginRoutes);

app.use(handleErrors);

export default app;
