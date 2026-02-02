import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthBasicService } from './auth-basic.service';
import { BasicAuthGuard } from '../guard/basic-auth.guard';
import { RegisterDto } from './dto/register.dto';

@Controller('auth-basic')
export class AuthBasicController {
  constructor(private readonly appService: AuthBasicService) {}
  @Post('register')
  async login(@Body() body: RegisterDto): Promise<string> {
    const user = await this.appService.register(body.email, body.password);

    return user.email;
  }

  @Get('hello')
  @UseGuards(BasicAuthGuard)
  hello(): string {
    return 'Hello World!';
  }
}
