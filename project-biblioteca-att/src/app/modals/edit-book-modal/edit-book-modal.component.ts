import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivroService } from '../../services/livro.service';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-edit-book-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-book-modal.component.html',
  styleUrls: ['./edit-book-modal.component.css']
})
export class EditBookModalComponent implements OnInit, OnChanges {
  @Input() isOpen: boolean = false;
  @Input() book: any;

  @Output() close = new EventEmitter<void>();
  @Output() updateBook = new EventEmitter<any>();

  editedBook: any = {};

  autoresDisponiveis: any[] = [];

  constructor(
    private livroService: LivroService,
    private autorService: AutorService
  ) {}

  ngOnInit(): void {
    this.autorService.getAutor().subscribe({
      next: (autores) => {
        this.autoresDisponiveis = autores;
      },
      error: (err) => {
        console.error('Erro ao carregar autores:', err);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['book'] && this.book) {
      // Clonagem do livro
      this.editedBook = {
        ...this.book,
        autores: this.book.autores.map((a: any) => a.id) // transforma [{id: 1, nome: ...}] → [1, ...]
      };
    }
  }

  saveChanges() {
    console.log('🧪 saveChanges() foi chamado!');
    console.log('📦 Conteúdo original de editedBook:', this.editedBook);

    if (!this.editedBook?.id) {
      console.error('❌ ID do livro ausente!');
      return;
    }

    const dataToSend = {
      ...this.editedBook,
      autoresIds: this.editedBook.autores
    };

    delete dataToSend.autores;

    console.log('📤 Enviando dados para o backend:', dataToSend);

    this.livroService.updateLivro(this.editedBook.id, dataToSend).subscribe({
      next: (updated) => {
        console.log('✅ Livro atualizado com sucesso:', updated);
        this.updateBook.emit(updated);
        this.close.emit();
      },
      error: (err) => {
        console.error('❌ Erro ao atualizar livro:', err);
      }
    });
  }

  cancel() {
    this.close.emit();
  }
}
