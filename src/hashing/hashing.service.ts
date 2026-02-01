import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashingService {
  async hash(data: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(data, salt);
  }

  async checkHash(data: string, hashedData: string): Promise<boolean> {
    return bcrypt.compare(data, hashedData);
  }
}
