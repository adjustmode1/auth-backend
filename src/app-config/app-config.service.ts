import { ConfigService } from '@nestjs/config';
import {
  DatabaseConfigInterface,
  SystemConfigInterface,
} from './app-config.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get<k>(key: string): k | undefined {
    return this.configService.get<k>(key);
  }

  getOrThrow<k>(key: string): k {
    return this.configService.getOrThrow<k>(key);
  }

  system(): SystemConfigInterface {
    return this.configService.getOrThrow<SystemConfigInterface>('system');
  }

  database(): DatabaseConfigInterface {
    return this.configService.getOrThrow<DatabaseConfigInterface>('database');
  }
}
