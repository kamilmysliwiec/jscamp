import { users } from '@app/fixtures';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  private readonly users: User[] = users;

  @Get()
  findAll(): User[] {
    return this.users;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto) {
    this.users.push(createUserDto);
    return this.users[this.users.length - 1];
  }

  @Get(':id')
  findOne(@Param('id') id: string): User | undefined {
    return this.users.find(user => user.id === +id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto) {
    const userId = this.users.findIndex(user => user.id === +id);
    this.users[userId] = updateUserDto;
    return this.users[userId];
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    const userId = this.users.findIndex(user => user.id === +id);
    this.users.splice(userId, 1);
  }
}
