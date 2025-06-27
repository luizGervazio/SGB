import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroService } from '../../services/livro.service';
import { MessageModalComponent } from "../../messages/message-modal/message-modal.component"; // importa o service

@Component({
  selector: 'app-remove-book-modal',
  standalone: true,
  imports: [CommonModule, MessageModalComponent],
  templateUrl: './remove-book-modal.component.html',
  styleUrls: ['./remove-book-modal.component.css']
})
export class RemoveBookModalComponent {
  @Input() isOpen: boolean = false;
  @Input() book: any;

  @Output() close = new EventEmitter<void>();
  @Output() removed = new EventEmitter<number>(); // emite o ID removido

  showMessageModal: boolean = false;
  messageType: 'success' | 'error' = 'success';
  messageTitle: string = '';
  messageDescription: string = '';

  constructor(private livroService: LivroService) {}

  cancel() {
    this.close.emit();
  }

  confirmRemove() {
    if (!this.book || !this.book.id) return;

    this.livroService.deleteLivro(this.book.id).subscribe({
      next: () => {

        this.messageType = 'success';
        this.messageTitle = 'Livro deletado com sucesso!';
        this.messageDescription = 'O livro foi deletado corretamente.';
        this.showMessageModal = true;

        this.removed.emit(this.book.id); // informa ao pai que foi removido
        this.close.emit();               // fecha o modal
      },
      error: (err) => {
        console.error('Erro ao remover livro:', err);
        this.messageType = 'error';
        this.messageTitle = 'Erro ao deletar o livro';
        this.messageDescription = 'Não foi possível deletar esse livro. Verifique se não tem empretismo ativo e Tente novamente.';
        this.showMessageModal = true;
        this.close.emit();
      }
    });
  }
}