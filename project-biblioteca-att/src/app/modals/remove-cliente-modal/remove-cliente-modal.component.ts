import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from '../../services/cliente.service'; // importa o service

@Component({
  selector: 'app-remove-cliente-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './remove-cliente-modal.component.html',
  styleUrls: ['./remove-cliente-modal.component.css']
})
export class RemoveClienteModalComponent {
  @Input() isOpen: boolean = false;
  @Input() cliente: any;

  @Output() close = new EventEmitter<void>();
  @Output() removed = new EventEmitter<number>(); // emite o ID removido

  constructor(private clienteService: ClienteService) {}

  cancel() {
    this.close.emit();
  }
  
  confirmRemove() {
    if (!this.cliente || !this.cliente.id) return;

    this.clienteService.deleteCliente(this.cliente.id).subscribe({
      next: () => {
        this.removed.emit(this.cliente.id); // informa ao pai que foi removido
        this.close.emit();               // fecha o modal
      },
      error: (err) => {
        console.error('Erro ao remover cliente:', err);
      }
    });
  }
}