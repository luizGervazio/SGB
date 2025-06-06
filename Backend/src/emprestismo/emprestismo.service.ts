import { Injectable } from '@nestjs/common';
import { CreateEmprestismoDto } from './dto/create-emprestismo.dto';
import { UpdateEmprestismoDto } from './dto/update-emprestismo.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Emprestismo } from 'src/emprestismo/entities/emprestismo.entity';


@Injectable()
export class EmprestismoService {
  constructor(private prisma: PrismaService){}

  private mapToEntity(emprestismo:any): Emprestismo{
    return{
      id: emprestismo.id,
      livros: emprestismo.livro,
      cliente: emprestismo.cliente,
      dataEmprestimo: emprestismo.dataEmprestimo,
      dataDevolucao: emprestismo.dataDevolucao,
      atraso: emprestismo.atraso,
      statusEmprestismo: emprestismo.statusEmprestismo
    };
  }

  async create(createEmprestismoDto: CreateEmprestismoDto) {
    const createEmprestismo = await this.prisma.emprestismo.create({
      data: createEmprestismoDto,
    });
    return this.mapToEntity(createEmprestismo);
  }

  async findAll() {
    const getEmprestismo = await this.prisma.emprestismo.findMany({
      include: { cliente: true,livro: true },
    });
    return getEmprestismo.map(getEmprestismo => this.mapToEntity(getEmprestismo));
  }

  async findOne(id: number) {
    const getEmprestismo = await this.prisma.emprestismo.findMany({
      where: { id },
      include: { cliente: true,livro: true },
    });
    return getEmprestismo.map(getEmprestismo => this.mapToEntity(getEmprestismo));
  }

  async update(id: number, updateEmprestismoDto: UpdateEmprestismoDto) {
    const updateEmprestismo = await this.prisma.emprestismo.update({
      where: { id },
      data: updateEmprestismoDto,
    });
    return this.mapToEntity(updateEmprestismo);
  }

  async remove(id: number) {
    const deleteEmprestismo = await this.prisma.emprestismo.delete({
      where: { id }
    });
    return `This action removes a #${id} emprestismo`;
  }
}
