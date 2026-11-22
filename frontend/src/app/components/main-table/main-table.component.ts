import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { SidebarService } from '../../services/sidebar.service';
import { RemoveBookModalComponent } from '../../modals/remove-book-modal/remove-book-modal.component';
import { EditBookModalComponent } from '../../modals/edit-book-modal/edit-book-modal.component';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-main-table',
  standalone: true,
  imports: [
    LucideAngularModule,
    CommonModule,
    FormsModule,
    RemoveBookModalComponent,
    EditBookModalComponent
  ],
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {
  @Input() filtro: string = '';
  isSidebarClosed: boolean = false;

  livros: any[] = [];

  showRemoveBookModal: boolean = false;
  bookToRemove: any = null;

  showEditBookModal: boolean = false;
  selectedBook: any = null;

  constructor(
    private sidebarService: SidebarService,
    private livroService: LivroService
  ) {}

  ngOnInit(): void {
  this.sidebarService.sidebarState$.subscribe(state => {
    this.isSidebarClosed = state;
  });

  this.carregarLivros(); 

  this.livroService.getAtualizacoes().subscribe(() => {
    this.carregarLivros();
  });
}

  // ✅ Padrão aplicado: método separado para buscar livros
  carregarLivros(): void {
    this.livroService.getLivros().subscribe((res) => {
      this.livros = res;
    });
  }

  livrosFiltrados() {
    const texto = (this.filtro || '').toLowerCase().trim();
    if (!texto) return this.livros;
    return this.livros.filter((l) =>
      [l.id?.toString(), l.titulo, l.genero, l.editora, this.nomesAutores(l)]
        .some((campo) => campo?.toLowerCase().includes(texto)),
    );
  }

  nomesAutores(livro: any): string {
    return livro?.autores?.map((a: any) => a.nome || a).join(', ') || 'Sem autor';
  }

  // Edição
  openEditBookModal(livro: any) {
    this.selectedBook = { ...livro };
    this.showEditBookModal = true;
  }

  closeEditBookModal() {
    this.selectedBook = null;
    this.showEditBookModal = false;
  }

  updateBook(updated: any) {
  const index = this.livros.findIndex(l => l.id === updated.id);
  if (index !== -1) {
    this.livros[index] = updated;
  }
  this.closeEditBookModal();
}


  // Remoção
  openRemoveBookModal(livro: any) {
    this.bookToRemove = livro;
    this.showRemoveBookModal = true;
  }

  closeRemoveBookModal() {
    this.bookToRemove = null;
    this.showRemoveBookModal = false;
  }

  removeBook(book: any) {
    this.livroService.deleteLivro(book.id).subscribe(() => {
      this.livros = this.livros.filter(l => l.id !== book.id);
      this.closeRemoveBookModal();
    });
  }
}