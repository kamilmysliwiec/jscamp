import { Catch, ExceptionFilter, ExecutionContext, HttpException } from '@nestjs/common';
import { LoggerService } from 'core/logger/logger.service';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  constructor(private readonly loggerService: LoggerService) {}

  catch(error: HttpException, context: ExecutionContext) {
    const response = context.switchToHttp().getResponse<Response>();
    const statusCode = error.getStatus();

    this.loggerService.error(`${error.constructor.name}: ${statusCode} status`);
    response.status(statusCode).json({
      timestamp: Date.now(),
      statusCode,
    });
  }
}
