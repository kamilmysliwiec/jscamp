import { users } from '@app/fixtures';
import { Injectable } from '@nestjs/common';
import { LoggerService } from 'core/logger/logger.service';
import { UserNotFoundException } from './exceptions/user-not-found.exception';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = users;

  constructor(private readonly loggerService: LoggerService) {}

  findAll(): User[] {
    return this.users;
  }

  create(createUserDto): User {
    this.loggerService.log(`Create [USER]: ${JSON.stringify(createUserDto)}`);

    this.users.push(createUserDto);
    return this.users[this.users.length - 1];
  }

  findOne(id: number): User {
    const user = this.users.find(item => item.id === id);
    if (!user) {
      throw new UserNotFoundException(id);
    }
    return user;
  }

  update(id: string, updateUserDto): User {
    const userId = this.users.findIndex(user => user.id === +id);
    if (userId <= 0) {
      throw new UserNotFoundException(id);
    }
    this.users[userId] = updateUserDto;
    return this.users[userId];
  }

  delete(id: string) {
    const userId = this.users.findIndex(user => user.id === +id);
    if (userId <= 0) {
      throw new UserNotFoundException(id);
    }
    this.users.splice(userId, 1);
  }
}
