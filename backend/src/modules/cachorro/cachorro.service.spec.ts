import { Test, TestingModule } from '@nestjs/testing';
import { CachorroService } from './cachorro.service';

describe('CachorroService', () => {
  let service: CachorroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CachorroService],
    }).compile();

    service = module.get<CachorroService>(CachorroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
