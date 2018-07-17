import { NotFoundException } from '@nestjs/common';

export class UserNotFoundException extends NotFoundException {
  constructor(id: number | string) {
    super(`User #${id} does not exist`);
  }
}
