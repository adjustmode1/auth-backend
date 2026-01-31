import { Controller, Get } from '@nestjs/common';
import { AuthBasicService } from './auth-basic.service';

@Controller()
export class AuthBasicController {
  constructor(private readonly appService: AuthBasicService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
