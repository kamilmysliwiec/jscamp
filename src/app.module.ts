import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { OrganizationsController } from './organizations/organizations.controller';
import { UsersService } from './users/users.service';
import { OrganizationsService } from './organizations/organizations.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, OrganizationsController],
  providers: [AppService, UsersService, OrganizationsService],
})
export class AppModule {}
