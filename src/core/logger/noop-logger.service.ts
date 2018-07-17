import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class NoopLoggerService implements LoggerService {
  log(message: string) {}
  error(message: string, trace: string) {}
  warn(message: string) {}
}
