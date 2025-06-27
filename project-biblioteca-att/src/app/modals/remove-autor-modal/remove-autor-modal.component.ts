import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorService } from '../../services/autor.service';
import { MessageModalComponent } from "../../messages/message-modal/message-modal.component"; // importa o service

@Component({
  selector: 'app-remove-autor-modal',
  standalone: true,
  imports: [CommonModule, MessageModalComponent],
  templateUrl: './remove-autor-modal.component.html',
  styleUrls: ['./remove-autor-modal.component.css']
})
export class RemoveAutorModalComponent {
  @Input() isOpen: boolean = false;
  @Input() autor: any;

  @Output() close = new EventEmitter<void>();
  @Output() removed = new EventEmitter<number>(); // emite o ID removido

  showMessageModal: boolean = false;
  messageType: 'success' | 'error' = 'success';
  messageTitle: string = '';
  messageDescription: string = '';

  constructor(private autorService: AutorService) {}

  cancel() {
    this.close.emit();
  }

  confirmRemove() {
    if (!this.autor || !this.autor.id) return;

    this.autorService.deleteAutor(this.autor.id).subscribe({
      next: () => {
        this.messageType = 'success';
        this.messageTitle = 'Autor removido com sucesso!';
        this.messageDescription = 'O autor foi deletado da base de dados.';
        this.showMessageModal = true;

        this.removed.emit(this.autor.id); // informa ao pai que foi removido
        this.close.emit();                // fecha o modal
      },
      error: (err) => {
        console.error('Erro ao remover Autor:', err);
        this.messageType = 'error';
        this.messageTitle = 'Erro ao remover autor';
        this.messageDescription = 'Não foi possível deletar o autor. Verifique se ele está vinculado a algum livro.';
        this.showMessageModal = true;
        this.close.emit();     
      }
    });
  }
}