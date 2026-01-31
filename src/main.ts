import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  const config = app.get<ConfigService>(ConfigService);

  const port = config.getOrThrow<number>('system.port');
  await app.listen(port);
  logger.log(`Server started on port ${port}`);
}

void bootstrap();
