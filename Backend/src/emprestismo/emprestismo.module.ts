import { Module } from '@nestjs/common';
import { EmprestismoService } from './emprestismo.service';
import { EmprestismoController } from './emprestismo.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [EmprestismoController],
  providers: [EmprestismoService,PrismaService],
})
export class EmprestismoModule {}
