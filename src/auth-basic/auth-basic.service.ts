import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsersEntity } from '../database/entities/users.entity';
import { HashingService } from '../hashing/hashing.service';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthBasicService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userDataRepo: Repository<UsersEntity>,
    private readonly hashingService: HashingService,
  ) {}

  // Help to login/logout not main purpose
  async register(email: string, password: string): Promise<UsersEntity> {
    const userData = this.userDataRepo.create({
      email,
      passwordHash: await this.hashingService.hash(password),
    });

    return this.userDataRepo.save(userData);
  }

  async login(email: string, password: string) {
    const userData = await this.userDataRepo.findOne({ where: { email } });

    if (!userData) {
      throw new BadRequestException('Email or password incorrect');
    }

    if (
      !(await this.hashingService.checkHash(password, userData.passwordHash))
    ) {
      throw new BadRequestException('Email or password incorrect');
    }

    return true;
  }
}
