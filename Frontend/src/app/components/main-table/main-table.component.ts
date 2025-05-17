import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarService } from '../../services/sidebar.service';
import { RemoveBookModalComponent } from '../modals/remove-book-modal/remove-book-modal.component';
import { EditBookModalComponent } from '../modals/edit-book-modal/edit-book-modal.component';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-main-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RemoveBookModalComponent,
    EditBookModalComponent
  ],
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {
  filtro: string = '';
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

    this.carregarLivros(); // ✅ Chama o método extraído
  }

  // ✅ Padrão aplicado: método separado para buscar livros
  carregarLivros(): void {
    this.livroService.getLivros().subscribe((res) => {
      this.livros = res;
    });
  }

  livrosFiltrados() {
    const texto = this.filtro.toLowerCase();
    return this.livros.filter(l =>
      l.titulo.toLowerCase().includes(texto) ||
      l.genero.toLowerCase().includes(texto) ||
      l.editora.toLowerCase().includes(texto) ||
      (l.autores?.map((a: any) => a.nome || a).join(', ') || '').toLowerCase().includes(texto)
    );
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
    this.livroService.updateLivro(updated.id, updated).subscribe(response => {
      const index = this.livros.findIndex(l => l.id === response.id);
      if (index !== -1) {
        this.livros[index] = response;
      }
      this.closeEditBookModal();
    });
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
