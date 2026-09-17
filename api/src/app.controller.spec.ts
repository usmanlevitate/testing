import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return a greeting payload', () => {
      const result = appController.getHello();
      expect(result.message).toBe('Hello from NestJS!');
      expect(result.service).toBe('api');
      expect(result.timestamp).toBeDefined();
    });
  });
});
