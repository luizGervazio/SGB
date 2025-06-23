import { OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivroService } from '../../services/livro.service';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-add-book-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.css']
})
export class AddBookModalComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() addBook = new EventEmitter<any>();

  constructor(private livroService: LivroService, private autorService: AutorService) {}

  newBook = {
    titulo: '',
    paginas: null,
    ano: null,
    genero: '',
    editora: '',
    autores: [],
    disponivel: true
  };

  autoresDisponiveis: any[] = [];

  ngOnInit(): void {
    this.autorService.getAutor().subscribe({
      next: (autores: any[]) => {
        this.autoresDisponiveis = autores;
      },
      error: (err: any) => {
        console.error('Erro ao buscar autores:', err);
      }
    });
  }

  submit() {
    const book = {
      ...this.newBook,
      autoresIds: this.newBook.autores
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
      autores: [],
      disponivel: true
    };
  }
}