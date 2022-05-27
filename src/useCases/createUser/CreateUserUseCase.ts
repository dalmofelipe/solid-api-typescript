import { User } from '../../entities/User'
import { IMailProvider } from '../../providers/IMailProvider'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserDTO } from '../createUser/ICreateUserDTO'


export class CreateUserUseCase {

	constructor(
		private userRepository : IUsersRepository,
		private mailProvider : IMailProvider
	) { }

	async execute(data: ICreateUserDTO) {

		const alreadyExists = await this.userRepository.findByEmail(data.email)

		if(alreadyExists) {
			throw new Error('user already exists')
		}

		const user = new User(data)

		await this.userRepository.save(user)

		await this.mailProvider.sendMail({
			to: {
				name: data.email,
				email: data.email
			},
			from: {
				name: data.email,
				email: data.email
			},
			subject: 'Seja bem vindo á plataforma',
			body: '<p>Voçê já pode fazer o login em nossa plataforma</p>'
		})
	}
}