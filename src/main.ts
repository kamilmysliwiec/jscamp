import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';
import { configService } from 'core/config/config.service';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  await app.listen(configService.getNumber('PORT'));
}
bootstrap();
