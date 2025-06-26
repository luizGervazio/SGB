import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmprestimoService } from '../../services/emprestimo.service';

@Component({
  selector: 'app-add-emprestimo-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-emprestimo-modal.component.html',
  styleUrls: ['./add-emprestimo-modal.component.css'],
})
export class AddEmprestimoModalComponent {
  @Input() isOpen: boolean = false;
  @Input() clientes: any[] = []; // Recebe a lista de clientes
  @Input() livros: any[] = [];   // Recebe a lista de livros
  @Output() close = new EventEmitter<void>();
  @Output() addClient = new EventEmitter<any>();

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
    const emprestimo = {
      livroId: Number(this.newEmprestimo.livroId),
      clienteId: Number(this.newEmprestimo.clienteId),
      dataEmprestimo: new Date(this.newEmprestimo.dataEmprestimo + 'T00:00:00').toISOString(),
      dataDevolucao: new Date(this.newEmprestimo.dataDevolucao + 'T00:00:00').toISOString(),
      atraso: this.newEmprestimo.atraso,
      statusEmprestismo: this.newEmprestimo.statusEmprestismo
    };

    console.log('📤 Dados a serem enviados:', emprestimo);

    this.cadastrarEmprestimo(emprestimo);
  }

  cadastrarEmprestimo(emprestimo: any): void {
    this.emprestimoService.addEmprestimo(emprestimo).subscribe((createdEmprestimo) => {
      this.addClient.emit(createdEmprestimo);
      this.reset();
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
