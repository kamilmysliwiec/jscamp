import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { LoggerModule } from './logger/logger.module';

export interface CoreModuleOptions {
  enableLogging: boolean;
}

@Module({})
export class CoreModule {
  static register(options: CoreModuleOptions): DynamicModule {
    const { enableLogging } = options;
    return {
      module: CoreModule,
      imports: [ConfigModule, LoggerModule.register({ enableLogging })],
      exports: [ConfigModule, LoggerModule],
    };
  }
}
