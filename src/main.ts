import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './exception-filter/http-exception.filter';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  const config = app.get<ConfigService>(ConfigService);

  const port = config.getOrThrow<number>('system.port');
  await app.listen(port);
  logger.log(`Server started on port ${port}`);
}

void bootstrap();
