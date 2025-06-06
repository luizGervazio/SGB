import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmprestimoService } from '../../services/emprestimo.service'; // importa o service

@Component({
  selector: 'app-remove-Emprestimo-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './remove-emprestimo-modal.component.html',
  styleUrls: ['./remove-emprestimo-modal.component.css']
})
export class RemoveEmprestimoModalComponent {
  @Input() isOpen: boolean = false;
  @Input() emprestimo: any;

  @Output() close = new EventEmitter<void>();
  @Output() removed = new EventEmitter<number>(); // emite o ID removido

  constructor(private emprestimoService: EmprestimoService) {}

  cancel() {
    this.close.emit();
  }
  
  confirmRemove() {
    if (!this.emprestimo || !this.emprestimo.id) return;

    // AQUI está a parte que você perguntou:
    this.emprestimoService.deleteEmprestimo(this.emprestimo.id).subscribe({
      next: () => {
        this.removed.emit(this.emprestimo.id);
        this.close.emit();
      },
      error: (err) => {
        console.error('Erro ao remover emprestimo:', err);
      }
    });
  }
}