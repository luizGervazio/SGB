import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroService } from '../../services/livro.service'; // importa o service

@Component({
  selector: 'app-remove-book-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './remove-book-modal.component.html',
  styleUrls: ['./remove-book-modal.component.css']
})
export class RemoveBookModalComponent {
  @Input() isOpen: boolean = false;
  @Input() book: any;

  @Output() close = new EventEmitter<void>();
  @Output() removed = new EventEmitter<number>(); // emite o ID removido

  constructor(private livroService: LivroService) {}

  cancel() {
    this.close.emit();
  }

  confirmRemove() {
    if (!this.book || !this.book.id) return;

    this.livroService.deleteLivro(this.book.id).subscribe({
      next: () => {
        this.removed.emit(this.book.id); // informa ao pai que foi removido
        this.close.emit();               // fecha o modal
      },
      error: (err) => {
        console.error('Erro ao remover livro:', err);
      }
    });
  }
}