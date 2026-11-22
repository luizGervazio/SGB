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
import { AutorService } from '../../services/autor.service';
import { MessageModalComponent } from "../../messages/message-modal/message-modal.component";

@Component({
  selector: 'app-edit-autor-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, MessageModalComponent],
  templateUrl: './edit-autor-modal.component.html',
  styleUrls: ['./edit-autor-modal.component.css']
})
export class EditAutorModalComponent implements OnChanges {
  @Input() isOpen: boolean = false;
  @Input() autor: any;

  @Output() close = new EventEmitter<void>();
  @Output() updateBook = new EventEmitter<any>();

  showMessageModal: boolean = false;
  messageType: 'success' | 'error' = 'success';
  messageTitle: string = '';
  messageDescription: string = '';

  editedAutor: any = {};

  constructor(private autorService: AutorService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['autor'] && this.autor) {
      // Clonagem segura do objeto original
      this.editedAutor = { ...this.autor };
    }
  }

  saveChanges() {
  console.log('🧪 saveChanges() foi chamado!');
  console.log('📦 Conteúdo original de editedAutor:', this.editedAutor);

  if (!this.editedAutor?.id) {
    console.error('❌ ID do Autor ausente!');
    return;
  }

  // Prepara somente os campos válidos
  const dataToSend = {
    nome: this.editedAutor.nome, // apenas isso, se seu model tiver só esse campo
  };

  console.log('📤 Enviando dados para o backend:', dataToSend);

  this.autorService.updateAutor(this.editedAutor.id, dataToSend).subscribe({
  next: (updated) => {
    console.log('✅ Autor atualizado com sucesso:', updated);

    this.messageType = 'success';
    this.messageTitle = 'Autor atualizado com sucesso!';
    this.messageDescription = 'As informações do autor foram salvas corretamente.';
    this.showMessageModal = true;

    
    this.updateBook.emit(updated); 
    this.close.emit();
  },
  error: (err) => {
    console.error('❌ Erro ao atualizar Autor:', err);

    this.messageType = 'error';
    this.messageTitle = 'Erro ao atualizar autor';
    this.messageDescription = 'Não foi possível atualizar o autor. Verifique os dados e tente novamente.';
    this.showMessageModal = true;
    this.close.emit();
  }
});

}

  cancel() {
    this.close.emit();
  }
}