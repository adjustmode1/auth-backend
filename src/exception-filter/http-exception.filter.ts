import {
  ArgumentsHost,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UnAuthorizationBasicException } from '../exception/un-authorization-basic.exception';

export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    if (exception instanceof UnAuthorizationBasicException) {
      return response
        .status(HttpStatus.UNAUTHORIZED)
        .set('WWW-Authenticate', 'Basic realm="user_page')
        .status(status)
        .json({
          statusCode: status,
          timestamp: new Date().toISOString(),
          path: request.url,
        });
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
