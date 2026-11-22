import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { CardComponent } from '../card/card.component';
import { CardDetalhesComponent } from '../card-detalhes/card-detalhes.component';
import { LivroService } from '../../services/livro.service';
import { nomesAutores } from '../../shared/capa';

type Ordem = 'titulo' | 'autor' | 'recentes' | 'antigos';

@Component({
  selector: 'app-main-catalogo',
  imports: [CommonModule, FormsModule, LucideAngularModule, CardComponent, CardDetalhesComponent],
  templateUrl: './main-catalogo.component.html',
  styleUrl: './main-catalogo.component.css',
})
export class MainCatalogoComponent implements OnInit {
  filtro = '';
  categoria = '';
  ordem: Ordem = 'titulo';

  livros: any[] = [];
  livroSelecionado: any = null;

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.carregarLivros();
    this.livroService.getAtualizacoes().subscribe(() => this.carregarLivros());
  }

  carregarLivros(): void {
    this.livroService.getLivros().subscribe((res) => {
      this.livros = res;
    });
  }

  /** Só livros disponíveis aparecem no catálogo público */
  private get disponiveis(): any[] {
    return this.livros.filter((livro) => livro.disponivel);
  }

  get totalDisponiveis(): number {
    return this.disponiveis.length;
  }

  get categorias(): string[] {
    const generos = this.disponiveis.map((l) => l.genero).filter(Boolean);
    return [...new Set<string>(generos)].sort((a, b) => a.localeCompare(b, 'pt-BR'));
  }

  livrosFiltrados(): any[] {
    const texto = this.filtro.toLowerCase().trim();

    const lista = this.disponiveis.filter((livro) => {
      const casaCategoria = !this.categoria || livro.genero === this.categoria;
      const casaTexto =
        !texto ||
        [livro.titulo, livro.genero, nomesAutores(livro)].some((campo) =>
          campo?.toLowerCase().includes(texto),
        );
      return casaCategoria && casaTexto;
    });

    const comparar: Record<Ordem, (a: any, b: any) => number> = {
      titulo: (a, b) => (a.titulo || '').localeCompare(b.titulo || '', 'pt-BR'),
      autor: (a, b) => nomesAutores(a).localeCompare(nomesAutores(b), 'pt-BR'),
      recentes: (a, b) => (b.ano || 0) - (a.ano || 0),
      antigos: (a, b) => (a.ano || 0) - (b.ano || 0),
    };
    return [...lista].sort(comparar[this.ordem]);
  }

  limparFiltros(): void {
    this.filtro = '';
    this.categoria = '';
  }

  abrirDetalhes(livro: any): void {
    this.livroSelecionado = livro;
  }
}
