import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { OrganizationsController } from './organizations/organizations.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, OrganizationsController],
  providers: [AppService],
})
export class AppModule {}
