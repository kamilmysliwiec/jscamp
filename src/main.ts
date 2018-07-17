import { NestFactory } from '@nestjs/core';
import { configService } from 'core/config/config.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(configService.getNumber('PORT'));
}
bootstrap();
