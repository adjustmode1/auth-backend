import { Module } from '@nestjs/common';
import { AuthBasicModule } from './auth-basic/auth-basic.module';
import { ConfigModule } from '@nestjs/config';
import { AppConfigModule } from './app-config/app-config.module';
import { AppConfigSchema } from './app-config/app-config.schema';
import { loadConfig } from './utils/load-configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => loadConfig(AppConfigSchema)],
    }),
    AuthBasicModule,
    AppConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
