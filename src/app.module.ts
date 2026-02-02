import { Module } from '@nestjs/common';
import { AuthBasicModule } from './auth-basic/auth-basic.module';
import { ConfigModule } from '@nestjs/config';
import { AppConfigModule } from './app-config/app-config.module';
import { AppConfigSchema } from './app-config/app-config.schema';
import { loadConfig } from './utils/load-configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigService } from './app-config/app-config.service';
import { UsersEntity } from './database/entities/users.entity';
import { AuthTokenModule } from './auth-token/auth-token.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => loadConfig(AppConfigSchema)],
    }),
    AppConfigModule,
    TypeOrmModule.forFeature([UsersEntity]),
    TypeOrmModule.forRootAsync({
      inject: [AppConfigService],
      useFactory: (config: AppConfigService) => {
        const db = config.database();
        return {
          type: 'postgres',
          host: db.host,
          port: db.port,
          username: db.username,
          password: db.password,
          database: db.database,
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
    AuthBasicModule,
    AuthTokenModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
