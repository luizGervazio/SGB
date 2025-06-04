import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-add-book-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.css']
})
export class AddBookModalComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() addBook = new EventEmitter<any>();

  newBook = {
    titulo: '',
    paginas: null,
    ano: null,
    genero: '',
    editora: '',
    disponivel: true
  };

  constructor(private livroService: LivroService) {}

  submit() {
    const book = {
      ...this.newBook,
      autoresIds: [10] // ✅ ID fixo de autor
    };

    this.cadastrarLivro(book);
  }

  cadastrarLivro(book: any): void {
    this.livroService.addLivro(book).subscribe((createdBook) => {
      this.addBook.emit(createdBook);
      this.reset();
    });
  }

  cancel() {
    this.close.emit();
    this.reset();
  }

  reset() {
    this.newBook = {
      titulo: '',
      paginas: null,
      ano: null,
      genero: '',
      editora: '',
      disponivel: true
    };
  }
}