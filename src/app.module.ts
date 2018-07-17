import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationsModule } from './organizations/organizations.module';
import { UsersModule } from './users/users.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [UsersModule, OrganizationsModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
