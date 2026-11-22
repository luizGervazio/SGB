import { Test, TestingModule } from '@nestjs/testing';
import { EmprestismoController } from './emprestismo.controller';
import { EmprestismoService } from './emprestismo.service';

describe('EmprestismoController', () => {
  let controller: EmprestismoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmprestismoController],
      providers: [EmprestismoService],
    }).compile();

    controller = module.get<EmprestismoController>(EmprestismoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
