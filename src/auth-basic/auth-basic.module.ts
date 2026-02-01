import { Module } from '@nestjs/common';
import { AuthBasicController } from './auth-basic.controller';
import { AuthBasicService } from './auth-basic.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '../database/entities/users.entity';
import { HashingService } from '../hashing/hashing.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  controllers: [AuthBasicController],
  providers: [AuthBasicService, HashingService],
})
export class AuthBasicModule {}
