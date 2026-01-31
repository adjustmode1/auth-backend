import { ConfigService } from '@nestjs/config';
import { SystemConfig } from './app-config.interface';

export class AuthConfigService {
  constructor(private readonly configService: ConfigService) {}

  get<k>(key: string): k | undefined {
    return this.configService.get<k>(key);
  }

  getOrThrow<k>(key: string): k {
    return this.configService.getOrThrow<k>(key);
  }

  system(): SystemConfig {
    return this.configService.getOrThrow<SystemConfig>('system');
  }
}
