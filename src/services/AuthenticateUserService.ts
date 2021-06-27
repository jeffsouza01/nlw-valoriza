import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs";
import { User } from "../entities/User"
import { UsersRepositories } from "../repositories/UsersRepositories";
import { sign } from "jsonwebtoken";

interface IAuthenticateService {
  email: string
  password: string
}

class AuthenticateUserService {

  async execute({email, password }: IAuthenticateService) {
    const userRepository = getCustomRepository(UsersRepositories);

    const user = await userRepository.findOne({
      email
    });

    if(!user) {
      throw new Error("Email or Password incorrect!")
    }

    const passMatch = await compare(password, user.password);

    if (!passMatch) {
      throw new Error("Email or Password incorrect!")
    }

    const token = sign({
      email: user.email,
      }, 
      "7423d88f7a7ee853ec44d22ec03caf6c",
      {
        subject: user.id,
        expiresIn: "1d"
      });

      return token;



  }
}

export {AuthenticateUserService}