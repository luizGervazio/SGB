import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Usuario } from './entities/usuario.entity';


@Injectable()
export class UsuarioService {
  constructor(private prisma:PrismaService){}

  private mapToEntity(usuario: any): Usuario{
    return {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
      tipo: usuario.tipo
    };
  }


  async create(createUsuarioDto: CreateUsuarioDto) {
    const createUsuario = await this.prisma.usuario.create({
      data: createUsuarioDto
    });
    return this.mapToEntity(createUsuario) ;
  }

  async findAll() {
    const getUsuario = await this.prisma.usuario.findMany();
    return getUsuario.map(getUsuario => this.mapToEntity(getUsuario));
  }

  async findOne(id: number) {
    const getUsuario = await this.prisma.usuario.findMany({
      where: { id },
    });
    return getUsuario.map(getUsuario => this.mapToEntity(getUsuario));
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const updateUsuario = await this.prisma.usuario.update({
      where: { id },
      data: updateUsuarioDto,
    });
    return this.mapToEntity(updateUsuario);
  }

  async remove(id: number) {
    const deleteUsuario = await this.prisma.usuario.delete({
      where: { id },
    });
    return this.mapToEntity(deleteUsuario);
  }
}
