import { Injectable } from '@nestjs/common';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Autor } from './entities/autor.entity';

@Injectable()
export class AutorService {
  constructor(private prisma: PrismaService) { }

  private mapToEntity(autor: any): Autor {
    return {
      id: autor.id,
      nome: autor.nome,
    };
  }

  async create(createAutorDto: CreateAutorDto) {
    const createAutor = await this.prisma.autor.create({ data: createAutorDto });
    return this.mapToEntity(createAutor);
  }

  async findAll() {
    const getAutor = await this.prisma.autor.findMany({});
    return getAutor.map(getAutor => this.mapToEntity(getAutor));
  }

  async findOne(id: number) {
    const getAutor = await this.prisma.autor.findMany({ where: { id } });
    return getAutor.map(getAutor => this.mapToEntity(getAutor));
  }

  async update(id: number, updateAutorDto: UpdateAutorDto) {
    const updateAutor = await this.prisma.autor.update({ where: { id }, data: updateAutorDto, });
    return this.mapToEntity(updateAutor);
  }

  async remove(id: number) {
    const deleteAutor = await this.prisma.autor.delete({ where: { id },});
    return this.mapToEntity(deleteAutor);
  }
}
