import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { FakeUsersRepository } from "../../repositories/implementions/FakeUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const usersRepository = new FakeUsersRepository()
const mailProvider = new MailtrapMailProvider()
const createUserUseCase = new CreateUserUseCase(usersRepository, mailProvider)
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController }