import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { LoggerService } from './../../core/logger/logger.service';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  constructor(private readonly loggerService: LoggerService) {}

  resolve(...args: any[]): MiddlewareFunction {
    return this.handler.bind(this);
  }

  handler(request: Request, response: Response, next: NextFunction) {
    this.loggerService.log(
      `Request: ${request.originalUrl} (${request.method})`,
    );
    next();
  }
}
