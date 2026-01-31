import { Test, TestingModule } from '@nestjs/testing';
import { AuthBasicController } from './auth-basic.controller';
import { AuthBasicService } from './auth-basic.service';

describe('AppController', () => {
  let appController: AuthBasicController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthBasicController],
      providers: [AuthBasicService],
    }).compile();

    appController = app.get<AuthBasicController>(AuthBasicController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
