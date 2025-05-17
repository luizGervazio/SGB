import { Test, TestingModule } from '@nestjs/testing';
import { EmprestismoService } from './emprestismo.service';

describe('EmprestismoService', () => {
  let service: EmprestismoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmprestismoService],
    }).compile();

    service = module.get<EmprestismoService>(EmprestismoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
