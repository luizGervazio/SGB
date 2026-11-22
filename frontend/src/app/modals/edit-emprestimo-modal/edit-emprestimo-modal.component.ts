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
import { EmprestimoService } from '../../services/emprestimo.service';
import { MessageModalComponent } from "../../messages/message-modal/message-modal.component";

@Component({
  selector: 'app-edit-emprestimo-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, MessageModalComponent],
  templateUrl: './edit-emprestimo-modal.component.html',
  styleUrls: ['./edit-emprestimo-modal.component.css']
})
export class EditEmprestimoModalComponent implements OnChanges {
  @Input() isOpen: boolean = false;
  @Input() emprestimo: any;
  @Input() clientes: any[] = [];
  @Input() livros: any[] = [];
  @Output() close = new EventEmitter<void>();
  @Output() updateEmprestimo = new EventEmitter<any>();

  showMessageModal: boolean = false;
  messageType: 'success' | 'error' = 'success';
  messageTitle: string = '';
  messageDescription: string = '';

  editedEmprestimo: any = {};

  constructor(private emprestimoService: EmprestimoService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['emprestimo'] && this.emprestimo) {
      this.editedEmprestimo = {
        id: this.emprestimo.id,
        livroId: this.emprestimo.livros?.id || this.emprestimo.livroId,
        clienteId: this.emprestimo.cliente?.id || this.emprestimo.clienteId,
        dataEmprestimo: this.emprestimo.dataEmprestimo,
        dataDevolucao: this.emprestimo.dataDevolucao,
        atraso: this.emprestimo.atraso,
        statusEmprestismo: this.emprestimo.statusEmprestismo
      };
    }
  }

  saveChanges() {
    if (!this.editedEmprestimo?.id) {
      console.error('❌ ID do empréstimo ausente!');
      return;
    }

    const dataToSend = {
      livroId: Number(this.editedEmprestimo.livroId),
      clienteId: Number(this.editedEmprestimo.clienteId),
      dataEmprestimo: this.formatDateTime(this.editedEmprestimo.dataEmprestimo),
      dataDevolucao: this.formatDateTime(this.editedEmprestimo.dataDevolucao),
      atraso: this.editedEmprestimo.atraso,
      statusEmprestismo: this.editedEmprestimo.statusEmprestismo
    };

    console.log('📤 Enviando dados para o backend:', dataToSend);

    this.emprestimoService.updateEmprestimo(this.editedEmprestimo.id, dataToSend).subscribe({
      next: (updated) => {
        console.log('✅ Empréstimo atualizado com sucesso:', updated);
        this.updateEmprestimo.emit(updated);

        this.messageType = 'success';
        this.messageTitle = 'Empréstimo atualizado com sucesso!';
        this.messageDescription = 'As informações do empréstimo foram atualizadas.';
        this.showMessageModal = true;

        this.close.emit(); // Se quiser aguardar o usuário fechar o modal, mova isso para dentro do handler do modal
      },
      error: (err) => {
        console.log('📤 Enviando dados para o backend:', dataToSend);
        console.error('❌ Erro ao atualizar empréstimo:', err);

        this.messageType = 'error';
        this.messageTitle = 'Erro ao atualizar empréstimo';
        this.messageDescription = 'Não foi possível atualizar o empréstimo. Verifique os dados.';
        this.showMessageModal = true;
        this.close.emit();
      }
    });
  }
  formatDateTime(date: string): string {
    const d = new Date(date);
    return d.toISOString(); // Exemplo: "2025-06-30T15:30:00.000Z"
  }


  cancel() {
    this.close.emit();
  }
}
