import { Autor } from 'src/autor/entities/autor.entity';

export class Livro {
  id: number;
  titulo?: string;
  disponivel: boolean;
  autores?: Autor[];
  paginas: number;
  ano: number;
  genero: string;
  editora: string;
}
