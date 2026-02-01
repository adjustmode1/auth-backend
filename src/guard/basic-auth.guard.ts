import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UnAuthorizationBasicException } from '../exception/un-authorization-basic.exception';
import { Repository } from 'typeorm';
import { UsersEntity } from '../database/entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HashingService } from '../hashing/hashing.service';

@Injectable()
export class BasicAuthGuard implements CanActivate {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepo: Repository<UsersEntity>,
    private readonly hashService: HashingService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Basic ')) {
      throw new UnAuthorizationBasicException({});
    }

    const encoded = authHeader.split(' ')[1];
    const decoded = atob(encoded);

    const [email, password] = decoded.split(':');

    const user = await this.userRepo.findOne({ where: { email } });

    if (!user) {
      throw new UnAuthorizationBasicException({});
    }

    if (!(await this.hashService.checkHash(password, user.passwordHash))) {
      throw new UnAuthorizationBasicException({});
    }

    return true;
  }
}
