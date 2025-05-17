import { Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Livro } from 'src/livro/entities/livro.entity';


@Injectable()
export class LivroService {
  constructor(private prisma: PrismaService) { }

  private mapToEntity(livro: any): Livro {
    return {
      id: livro.id,
      titulo: livro.titulo,
      disponivel: livro.disponivel,
      autores: livro.autores,
      paginas: livro.paginas,
      ano: livro.ano,
      genero: livro.genero,
      editora: livro.editora,
    };
  }

  async create(createLivroDto: CreateLivroDto) {
    const createLivro = await this.prisma.livro.create({
      data: {
        titulo: createLivroDto.titulo,
        disponivel: createLivroDto.disponivel,
        paginas: createLivroDto.paginas,
        ano: createLivroDto.ano,
        genero: createLivroDto.genero,
        editora: createLivroDto.editora,
        autores: {
          connect: createLivroDto.autoresIds.map((id) => ({ id })),
        },
      },
      include: {
        autores: true,
      },
    });

    return this.mapToEntity(createLivro);
  }


  async findAll() {
    const getLivros = await this.prisma.livro.findMany({
      include: {
        autores: true, // ← isso é o que faltava
      },
    });

    return getLivros.map(livro => this.mapToEntity(livro));
  }


  async findOne(id: number) {
    const getLivros = await this.prisma.livro.findMany({
      where: { id },
      include: { autores: true },
    });

    return getLivros.map(livro => this.mapToEntity(livro));
  }

  async update(id: number, updateLivroDto: UpdateLivroDto) {
  const autoresIds = Array.isArray(updateLivroDto.autoresIds)
    ? updateLivroDto.autoresIds
    : [];

  const updateLivro = await this.prisma.livro.update({
    where: {
      id: id,
    },
    data: {
      titulo: updateLivroDto.titulo,
      disponivel: updateLivroDto.disponivel,
      paginas: updateLivroDto.paginas,
      ano: updateLivroDto.ano,
      genero: updateLivroDto.genero,
      editora: updateLivroDto.editora,
      autores: {
        set: autoresIds.map((id) => ({ id })), // ✅ agora seguro
      },
    },
    include: {
      autores: true,
    },
  });

  return this.mapToEntity(updateLivro);
}



  async remove(id: number) {
    const deleteLivro = await this.prisma.livro.delete({
      where: { id },
    });
    return this.mapToEntity(deleteLivro);
  }
}
