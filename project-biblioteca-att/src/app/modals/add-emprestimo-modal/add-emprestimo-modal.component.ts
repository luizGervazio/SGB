import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmprestimoService } from '../../services/emprestimo.service';
import { MessageModalComponent } from "../../messages/message-modal/message-modal.component";

@Component({
  selector: 'app-add-emprestimo-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, MessageModalComponent],
  templateUrl: './add-emprestimo-modal.component.html',
  styleUrls: ['./add-emprestimo-modal.component.css'],
})
export class AddEmprestimoModalComponent {
  @Input() isOpen: boolean = false;
  @Input() clientes: any[] = []; // Recebe a lista de clientes
  @Input() livros: any[] = [];   // Recebe a lista de livros
  @Output() close = new EventEmitter<void>();
  @Output() addClient = new EventEmitter<any>();

  showMessageModal: boolean = false;
  messageType: 'success' | 'error' = 'success';
  messageTitle: string = '';
  messageDescription: string = '';

  newEmprestimo = {
    livroId: null,
    clienteId: null,
    dataEmprestimo: '',
    dataDevolucao: '',
    atraso: true,
    statusEmprestismo: true
  };

  constructor(private emprestimoService: EmprestimoService) {}

  submit() {
    if (!this.newEmprestimo.dataEmprestimo || !this.newEmprestimo.dataDevolucao) {
      this.messageType = 'error';
      this.messageTitle = 'Datas inválidas!';
      this.messageDescription = 'Por favor, preencha as datas de empréstimo e devolução corretamente.';
      this.showMessageModal = true;
      this.close.emit();
      return;
    }

    let dataEmprestimo: string;
    let dataDevolucao: string;

    try {
      dataEmprestimo = new Date(this.newEmprestimo.dataEmprestimo + 'T00:00:00').toISOString();
      dataDevolucao = new Date(this.newEmprestimo.dataDevolucao + 'T00:00:00').toISOString();
    } catch (error) {
      this.messageType = 'error';
      this.messageTitle = 'Erro ao processar datas';
      this.messageDescription = 'As datas inseridas são inválidas. Tente novamente.';
      this.showMessageModal = true;
      this.close.emit(); // ❗ Move para antes do return
      return;
    }

    const emprestimo = {
      livroId: Number(this.newEmprestimo.livroId),
      clienteId: Number(this.newEmprestimo.clienteId),
      dataEmprestimo,
      dataDevolucao,
      atraso: this.newEmprestimo.atraso,
      statusEmprestismo: this.newEmprestimo.statusEmprestismo
    };

    console.log('📤 Dados a serem enviados:', emprestimo);
    this.cadastrarEmprestimo(emprestimo);
  }

  cadastrarEmprestimo(emprestimo: any): void {
    this.emprestimoService.addEmprestimo(emprestimo).subscribe({
      next: (createdEmprestimo) => {
        this.addClient.emit(createdEmprestimo);
        this.messageType = 'success';
        this.messageTitle = 'Empréstimo cadastrado com sucesso!';
        this.messageDescription = 'O empréstimo foi registrado corretamente.';
        this.showMessageModal = true;
        this.reset();
        this.close.emit();
      },
      error: (err) => {
        console.error('❌ Erro ao cadastrar empréstimo:', err);
        this.messageType = 'error';
        this.messageTitle = 'Erro ao cadastrar empréstimo';
        this.messageDescription = 'Não foi possível registrar o empréstimo. Verifique os dados.';
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
    this.newEmprestimo = {
      clienteId: null,
      livroId: null,
      dataEmprestimo: '',
      dataDevolucao: '',
      atraso: false,
      statusEmprestismo: true
    };
  }
}
