import { Test, TestingModule } from '@nestjs/testing';
import { CachorroController } from './cachorro.controller';
import { CachorroService } from './cachorro.service';

describe('CachorroController', () => {
  let controller: CachorroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CachorroController],
      providers: [CachorroService],
    }).compile();

    controller = module.get<CachorroController>(CachorroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
