import { OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivroService } from '../../services/livro.service';
import { AutorService } from '../../services/autor.service';
import { MessageModalComponent } from "../../messages/message-modal/message-modal.component";

@Component({
  selector: 'app-add-book-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, MessageModalComponent],
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.css']
})
export class AddBookModalComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() addBook = new EventEmitter<any>();

  showMessageModal: boolean = false;
  messageType: 'success' | 'error' = 'success';
  messageTitle: string = '';
  messageDescription: string = '';

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
  this.livroService.addLivro(book).subscribe({
    next: (createdBook) => {
      this.addBook.emit(createdBook);
      this.reset();
      // 🎉 Mostrar modal de sucesso
      this.messageType = 'success';
      this.messageTitle = 'Livro adicionado com sucesso!';
      this.messageDescription = 'Seu livro foi adicionado à base de dados.';
      this.showMessageModal = true;
    },
    error: (err) => {
      console.error('Erro ao adicionar livro:', err);
      this.messageType = 'error';
      this.messageTitle = 'Erro ao adicionar livro';
      this.messageDescription = 'Não foi possível adicionar o livro. Verifique os dados preenchidos e tente novamente.';
      this.showMessageModal = true;
      this.close.emit();
    }
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