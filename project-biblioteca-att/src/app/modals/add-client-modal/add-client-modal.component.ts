import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-add-client-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-client-modal.component.html',
  styleUrls: ['./add-client-modal.component.css']
})
export class AddClientModalComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() addClient = new EventEmitter<any>();

  newCliente = {
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    endereco: '',
    numero: '',
    cidade: '',
    status: '',
  };

  constructor(private clienteService: ClienteService) {}

  submit() {
    const cliente = {
      ...this.newCliente
    };

    this.cadastrarCliente(cliente);
  }

  cadastrarCliente(cliente: any): void {
    this.clienteService.addCliente(cliente).subscribe((createdCliente) => {
      this.addClient.emit(createdCliente);
      this.reset();
    });
  }

  cancel() {
    this.close.emit();
    this.reset();
  }

  reset() {
    this.newCliente = {
      nome: '',
      email: '',
      telefone: '',
      cpf: '',
      endereco: '',
      numero: '',
      cidade: '',
      status: '',
    };
  }
}