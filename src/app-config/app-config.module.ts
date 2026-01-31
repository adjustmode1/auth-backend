import { Global, Module } from '@nestjs/common';
import { AuthConfigService } from './app-config.service';

@Global()
@Module({
  imports: [],
  providers: [AuthConfigService],
  exports: [AuthConfigService],
})
export class AppConfigModule {}
