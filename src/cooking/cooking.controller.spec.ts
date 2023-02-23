import { Test, TestingModule } from '@nestjs/testing';
import { CookingController } from './cooking.controller';

describe('CookingController', () => {
  let controller: CookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CookingController],
    }).compile();

    controller = module.get<CookingController>(CookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
