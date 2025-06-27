import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmprestimoService } from '../../services/emprestimo.service';
import { MessageModalComponent } from "../../messages/message-modal/message-modal.component"; // importa o service

@Component({
  selector: 'app-remove-Emprestimo-modal',
  standalone: true,
  imports: [CommonModule, MessageModalComponent],
  templateUrl: './remove-emprestimo-modal.component.html',
  styleUrls: ['./remove-emprestimo-modal.component.css']
})
export class RemoveEmprestimoModalComponent {
  @Input() isOpen: boolean = false;
  @Input() emprestimo: any;

  @Output() close = new EventEmitter<void>();
  @Output() removed = new EventEmitter<number>(); // emite o ID removido

  showMessageModal: boolean = false;
  messageType: 'success' | 'error' = 'success';
  messageTitle: string = '';
  messageDescription: string = '';

  constructor(private emprestimoService: EmprestimoService) {}

  cancel() {
    this.close.emit();
  }
  
  confirmRemove() {
    if (!this.emprestimo || !this.emprestimo.id) return;
 
    this.emprestimoService.deleteEmprestimo(this.emprestimo.id).subscribe({
      next: () => {
        this.messageType = 'success';
        this.messageTitle = 'Empréstimo removido com sucesso!';
        this.messageDescription = 'O registro de empréstimo foi excluído corretamente.';
        this.showMessageModal = true;

        this.removed.emit(this.emprestimo.id);
        this.close.emit(); // ou segure aqui se quiser mostrar o modal primeiro
      },
      error: (err) => {
        console.error('Erro ao remover empréstimo:', err);
        this.messageType = 'error';
        this.messageTitle = 'Erro ao remover empréstimo';
        this.messageDescription = 'Não foi possível excluir o empréstimo. Verifique se há vínculos relacionados.';
        this.showMessageModal = true;
      }
    });
  }
}