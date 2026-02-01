import { UnauthorizedException } from '@nestjs/common';

export class UnAuthorizationBasicException extends UnauthorizedException {
  constructor(props) {
    super(props);
  }
}
