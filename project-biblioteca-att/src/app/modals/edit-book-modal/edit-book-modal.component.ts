import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-edit-book-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-book-modal.component.html',
  styleUrls: ['./edit-book-modal.component.css']
})
export class EditBookModalComponent implements OnChanges {
  @Input() isOpen: boolean = false;
  @Input() book: any;

  @Output() close = new EventEmitter<void>();
  @Output() updateBook = new EventEmitter<any>();

  editedBook: any = {};

  constructor(private livroService: LivroService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['book'] && this.book) {
      // Clonagem segura do objeto original
      this.editedBook = { ...this.book };
    }
  }

  saveChanges() {
  console.log('🧪 saveChanges() foi chamado!');
  if (!this.editedBook?.id) {
    console.error('❌ ID do livro ausente!');
    return;
  }

  const autoresIds = Array.isArray(this.editedBook.autores)
    ? this.editedBook.autores.map((a: any) => a.id)
    : [];

  const dataToSend = {
    ...this.editedBook,
    autoresIds,
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