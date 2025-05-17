import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) { }

  private mapToEntity(cliente: any): Cliente {
    return {
      id: cliente.id,
      nome: cliente.nome,
      email: cliente.email,
      telefone: cliente.telefone,
      cpf: cliente.cpf,
      endereco: cliente.endereco,
      numero: cliente.numero,
      cidade: cliente.cidade,
      status: cliente.status,
    };
  }

  async create(createClienteDto: CreateClienteDto) {
    const createCliente = await this.prisma.cliente.create({ 
      data: createClienteDto
     });
    return this.mapToEntity(createCliente);
  }

  async findAll() {
    const getCliente = await this.prisma.cliente.findMany({});
    return getCliente.map(getCliente => this.mapToEntity(getCliente));
  }

  async findOne(id: number) {
    const getCliente = await this.prisma.cliente.findMany({
      where: { id },
    });
    return getCliente.map(getCliente => this.mapToEntity(getCliente));
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    const updateCliente = await this.prisma.cliente.update({
      where: { id },
      data: updateClienteDto,
    });
    return this.mapToEntity(updateCliente);
  }

  async remove(id: number) {
    const deleteCliente = await this.prisma.cliente.delete({
      where: { id },
    });
    return this.mapToEntity(deleteCliente);
  }
}
