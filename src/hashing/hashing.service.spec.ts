import { HashingService } from './hashing.service';
import { Test } from '@nestjs/testing';

describe('HashingService', () => {
  let hashingService: HashingService;

  beforeEach(async () => {
    const testingModule = await Test.createTestingModule({
      imports: [],
      providers: [HashingService],
    }).compile();

    hashingService = testingModule.get<HashingService>(HashingService);
  });

  describe('hash()', () => {
    it('Should be able to register a new hashing service', async () => {
      const result = await hashingService.hash('data');
      expect(typeof result).toEqual('string');
    });

    it('Should be able to register a new hashing and hash string difference', async () => {
      const inputData = 'data';

      const hash1 = await hashingService.hash(inputData);
      const hash2 = await hashingService.hash(inputData);
      expect(hash1 !== hash2).toBeTruthy();
    });
  });

  describe('checkHash()', () => {
    it('Should return true when hashing match', async () => {
      const inputData = 'data';
      const hash = await hashingService.hash(inputData);
      const result = await hashingService.checkHash(inputData, hash);
      expect(result).toBeTruthy();
    });

    it('Should return false when hashing not mathc', async () => {
      const result = await hashingService.checkHash('data', 'hashData');
      expect(result).toBeFalsy();
    });
  });
});
