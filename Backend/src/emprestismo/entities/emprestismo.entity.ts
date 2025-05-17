import { Cliente } from 'src/cliente/entities/cliente.entity';
import { Livro } from 'src/livro/entities/livro.entity';

export class Emprestismo {
  id: number;
  livros: Livro;
  cliente: Cliente;
  dataEmprestimo: Date;
  dataDevolucao: Date;
  atraso: boolean;
  statusEmprestismo: boolean;
}
