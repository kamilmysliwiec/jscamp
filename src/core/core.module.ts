import { DynamicModule, Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'common/filters/http-exception.filter';
import { ConfigModule } from './config/config.module';
import { LoggerModule } from './logger/logger.module';

export interface CoreModuleOptions {
  enableLogging: boolean;
}

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
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
