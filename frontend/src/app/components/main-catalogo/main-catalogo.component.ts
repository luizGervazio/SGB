import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';
import { LivroService } from '../../services/livro.service';
import { AutorService } from '../../services/autor.service';
import { CardDetalhesComponent } from '../card-detalhes/card-detalhes.component';

@Component({
  selector: 'app-main-catalogo',
  imports: [CardComponent,CommonModule,CardDetalhesComponent],
  templateUrl: './main-catalogo.component.html',
  styleUrl: './main-catalogo.component.css'
})
export class MainCatalogoComponent implements OnInit {
  filtro: string = '';
isSidebarClosed: boolean = false;

livros: any[] = [];

livroSelecionado: any = null;


showRemoveBookModal: boolean = false;
bookToRemove: any = null;

showEditBookModal: boolean = false;
selectedBook: any = null;

constructor(
  private autorService: AutorService,
  private livroService: LivroService
) {}

categorias: string[] = [];

ngOnInit(): void {
  this.carregarLivros();

  this.livroService.getAtualizacoes().subscribe(() => {
    console.log('📚 Atualização recebida no catálogo!');
    this.carregarLivros();
});

}

carregarLivros(): void {
    this.livroService.getLivros().subscribe((res) => {
      this.livros = res;
    });
  }

livrosFiltrados() {
  const texto = this.filtro.toLowerCase();

  return this.livros
    .filter(livro => livro.disponivel) // Mostra apenas os disponíveis
    .filter(livro =>
      livro.titulo?.toLowerCase().includes(texto) ||
      (livro.autores?.map((a: any) => a.nome).join(', ') || '').toLowerCase().includes(texto) ||
      livro.genero?.toLowerCase().includes(texto)
    );
}

abrirDetalhes(livro: any) {
 this.livroSelecionado = livro;
}

  
}