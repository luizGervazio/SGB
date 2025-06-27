
import { HeaderCatalogoComponent } from "../../components/header-catalogo/header-catalogo.component";
import { FooterCatalogoComponent } from "../../components/footer-catalogo/footer-catalogo.component"
import { MainCatalogoComponent } from "../../components/main-catalogo/main-catalogo.component";
import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-catalogo',
  imports: [HeaderCatalogoComponent, FooterCatalogoComponent, MainCatalogoComponent],
  templateUrl: './catalogo.component.html',
})
export class CatalogoComponent implements OnInit {
  totalDisponiveis: number = 0;
  
  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.contarLivrosDisponiveis();
  }

  contarLivrosDisponiveis(): void {
    this.livroService.getLivros().subscribe({
      next: (livros: any[]) => {
        this.totalDisponiveis = livros.filter(livro => livro.disponivel === true).length;
        console.log('📚 Total de livros disponíveis:', this.totalDisponiveis);
      },
      error: (err) => {
        console.error('Erro ao buscar livros:', err);
      }
    });
  }
}