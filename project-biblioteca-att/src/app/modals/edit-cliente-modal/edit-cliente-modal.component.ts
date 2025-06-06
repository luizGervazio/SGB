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
import { ClienteService } from '../../services/cliente.service';


@Component({
  selector: 'app-edit-cliente-modal',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './edit-cliente-modal.component.html',
  styleUrls: ['./edit-cliente-modal.component.css']
})
export class EditClienteModalComponent implements OnChanges {
  @Input() isOpen: boolean = false;
  @Input() cliente: any;

  @Output() close = new EventEmitter<void>();
  @Output() updateCliente = new EventEmitter<any>();

editedCliente: any = {};

  constructor(private ClienteService: ClienteService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cliente'] && this.cliente) {
      // Clonagem segura do objeto original
      this.editedCliente = { ...this.cliente };
    }
  }

  saveChanges() {
  console.log('🧪 saveChanges() foi chamado!');

  if (!this.editedCliente?.id) {
    console.error('❌ ID do cliente ausente!');
    return;
  }

  const {
    id,         // ❌ não será enviado
    autores,    // ❌ não existe no modelo do cliente
    emprestimos, // ❌ se existir, também remova
    ...dataToSend
  } = this.editedCliente;

  console.log('📤 Enviando dados para o backend:', dataToSend);

  this.ClienteService.updateCliente(this.editedCliente.id, dataToSend).subscribe({
    next: (updated) => {
      console.log('✅ Cliente atualizado com sucesso:', updated);
      this.updateCliente.emit(updated);
      this.close.emit();
    },
    error: (err) => {
      console.error('❌ Erro ao atualizar Cliente:', err);
    }
  });
}

  cancel() {
    this.close.emit();
  }
}