import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";


export class FakeUsersRepository implements IUsersRepository {

    private users: User[] = []

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(u => u.email === email)
        console.log(user)
        return user 
    }

    async save(user: User) {
        this.users.push(user)
    }
}