import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { OrganizationsController } from './organizations/organizations.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, OrganizationsController],
  providers: [AppService, UsersService],
})
export class AppModule {}
