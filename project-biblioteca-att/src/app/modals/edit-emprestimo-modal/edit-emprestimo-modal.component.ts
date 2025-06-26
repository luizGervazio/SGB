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

@Component({
  selector: 'app-edit-emprestimo-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
        this.close.emit();
      },
      error: (err) => {
        console.log('📤 Enviando dados para o backend:', dataToSend);
        console.error('❌ Erro ao atualizar empréstimo:', err);
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
