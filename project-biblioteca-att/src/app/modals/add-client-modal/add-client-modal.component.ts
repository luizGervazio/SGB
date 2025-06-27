import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { MessageModalComponent } from "../../messages/message-modal/message-modal.component";

@Component({
  selector: 'app-add-client-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, MessageModalComponent],
  templateUrl: './add-client-modal.component.html',
  styleUrls: ['./add-client-modal.component.css']
})
export class AddClientModalComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() addClient = new EventEmitter<any>();

  showMessageModal: boolean = false;
  messageType: 'success' | 'error' = 'success';
  messageTitle: string = '';
  messageDescription: string = '';

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
    this.clienteService.addCliente(cliente).subscribe({
      next: (createdCliente) => {
        this.addClient.emit(createdCliente);
        this.messageType = 'success';
        this.messageTitle = 'Cliente cadastrado com sucesso!';
        this.messageDescription = 'O cliente foi adicionado à base de dados.';
        this.showMessageModal = true;
        this.reset();
        this.close.emit();
      },
      error: (err) => {
        console.error('❌ Erro ao cadastrar cliente:', err);
        this.messageType = 'error';
        this.messageTitle = 'Erro ao cadastrar cliente';
        this.messageDescription = 'Não foi possível adicionar o cliente. Verifique os dados preenchidos.';
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