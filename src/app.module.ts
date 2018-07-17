import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { OrganizationsModule } from 'organizations/organizations.module';
import { UsersModule } from 'users/users.module';

@Module({
  imports: [UsersModule, OrganizationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
