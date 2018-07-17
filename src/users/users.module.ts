import { Module } from '@nestjs/common';
import { CoreModule } from 'core/core.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [CoreModule.register({ enableLogging: true })],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
