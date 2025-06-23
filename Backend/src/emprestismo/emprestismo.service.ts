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
    // 1. Verifica se o livro existe e está disponível
    const livro = await this.prisma.livro.findUnique({
      where: { id: createEmprestismoDto.livroId },
    });

    if (!livro) {
      throw new Error('Livro não encontrado');
    }

    if (!livro.disponivel) {
      throw new Error('Livro já está emprestado ou indisponível');
    }

    // 2. Cria o empréstimo
    const createEmprestismo = await this.prisma.emprestismo.create({
      data: createEmprestismoDto,
    });

    // 3. Atualiza o livro para "indisponível"
    await this.prisma.livro.update({
      where: { id: createEmprestismoDto.livroId },
      data: { disponivel: false },
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
      where: { id: Number(id) },
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
    // 1. Busca o empréstimo para saber qual livro foi emprestado
    const emprestimo = await this.prisma.emprestismo.findUnique({
      where: { id },
    });

    if (!emprestimo) {
      throw new Error(`Empréstimo com ID ${id} não encontrado`);
    }

    // 2. Remove o empréstimo
    await this.prisma.emprestismo.delete({
      where: { id: Number(id) },
    });

    // 3. Atualiza o livro para disponível
    await this.prisma.livro.update({
      where: { id: emprestimo.livroId },
      data: { disponivel: true },
    });

    return `Empréstimo #${id} removido e livro marcado como disponível`;
  }

}
