import { Module } from '@nestjs/common';
import { configProviders } from './config.providers';
import { ConfigService } from './config.service';

@Module({
  providers: [...configProviders],
  exports: [ConfigService],
})
export class ConfigModule {}
