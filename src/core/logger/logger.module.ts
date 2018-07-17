import { DynamicModule, Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { NoopLoggerService } from './noop-logger.service';

export interface LoggerModuleOptions {
  enableLogging: boolean;
}

@Module({
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule {
  static register(options: LoggerModuleOptions): DynamicModule {
    const { enableLogging } = options;
    return {
      module: LoggerModule,
      providers: [
        {
          provide: LoggerService,
          useClass: enableLogging ? LoggerService : NoopLoggerService,
        },
      ],
    };
  }
}
