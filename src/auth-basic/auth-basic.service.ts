import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthBasicService {
  getHello(): string {
    return 'Hello World!';
  }
}
