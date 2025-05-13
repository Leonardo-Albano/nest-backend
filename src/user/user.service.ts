import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  private users: User[] = [];

  async getAllUser(): Promise<User[]> {
    return this.users;
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const saltOrRounds = 10;
    const hashedPassword = await hash(createUserDTO.password, saltOrRounds);

    const user: User = {
      ...createUserDTO,
      id: this.users.length + 1,
      password: hashedPassword,
    };

    this.users.push(user);

    return user;
  }
}
