import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../services/cliente.service';
import { MessageModalComponent } from "../../messages/message-modal/message-modal.component"; // importa o service

@Component({
  selector: 'app-remove-cliente-modal',
  standalone: true,
  imports: [CommonModule, MessageModalComponent],
  templateUrl: './remove-cliente-modal.component.html',
  styleUrls: ['./remove-cliente-modal.component.css']
})
export class RemoveClienteModalComponent {
  @Input() isOpen: boolean = false;
  @Input() cliente: any;

  @Output() close = new EventEmitter<void>();
  @Output() removed = new EventEmitter<number>(); // emite o ID removido

  showMessageModal: boolean = false;
  messageType: 'success' | 'error' = 'success';
  messageTitle: string = '';
  messageDescription: string = '';

  constructor(private clienteService: ClienteService) {}

  cancel() {
    this.close.emit();
  }
  
  confirmRemove() {
    if (!this.cliente || !this.cliente.id) return;

    this.clienteService.deleteCliente(this.cliente.id).subscribe({
      next: () => {
        this.messageType = 'success';
        this.messageTitle = 'Cliente removido com sucesso!';
        this.messageDescription = 'O cliente foi excluído da base de dados.';
        this.showMessageModal = true;

        this.removed.emit(this.cliente.id);
        this.close.emit(); // Se quiser fechar só após o usuário clicar em "Fechar", mova para o handler do modal
      },
      error: (err) => {
        console.error('Erro ao remover cliente:', err);
        this.messageType = 'error';
        this.messageTitle = 'Erro ao remover cliente';
        this.messageDescription = 'Não foi possível remover o cliente. Verifique se ele está vinculado a empréstimos.';
        this.showMessageModal = true;
        this.close.emit();
      }
    });

  }
}