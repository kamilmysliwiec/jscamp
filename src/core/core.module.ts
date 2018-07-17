import { DynamicModule, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'common/filters/http-exception.filter';
import { LoggingMiddleware } from 'common/middleware/logging.middleware';
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
export class CoreModule implements NestModule {
  static register(options: CoreModuleOptions): DynamicModule {
    const { enableLogging } = options;
    return {
      module: CoreModule,
      imports: [ConfigModule, LoggerModule.register({ enableLogging })],
      exports: [ConfigModule, LoggerModule],
    };
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
