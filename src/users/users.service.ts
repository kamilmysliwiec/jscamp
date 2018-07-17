import { users } from '@app/fixtures';
import { Injectable } from '@nestjs/common';
import { LoggerService } from 'core/logger/logger.service';
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

  findOne(id: string): User | undefined {
    return this.users.find(user => user.id === +id);
  }

  update(id: string, updateUserDto): User {
    const userId = this.users.findIndex(user => user.id === +id);
    this.users[userId] = updateUserDto;
    return this.users[userId];
  }

  delete(id: string) {
    const userId = this.users.findIndex(user => user.id === +id);
    this.users.splice(userId, 1);
  }
}
