import { Module } from '@nestjs/common';
import { AuthBasicController } from './auth-basic.controller';
import { AuthBasicService } from './auth-basic.service';

@Module({
  imports: [],
  controllers: [AuthBasicController],
  providers: [AuthBasicService],
})
export class AuthBasicModule {}
