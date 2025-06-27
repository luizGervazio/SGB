import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutorService } from '../../services/autor.service';
import { MessageModalComponent } from "../../messages/message-modal/message-modal.component";

@Component({
  selector: 'app-add-autor-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, MessageModalComponent],
  templateUrl: './add-autor-modal.component.html',
  styleUrls: ['./add-autor-modal.component.css']
})
export class AddAutorModalComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() addAutor = new EventEmitter<any>();

  showMessageModal: boolean = false;
  messageType: 'success' | 'error' = 'success';
  messageTitle: string = '';
  messageDescription: string = '';

  newAutor = {
    nome: ''
  };

  constructor(private autorService: AutorService) {}

  submit() {
    const autor = {
      ...this.newAutor
    };

    this.cadastrarAutor(autor);
  }

  cadastrarAutor(autor: any): void {
    this.autorService.addAutor(autor).subscribe({
      next: (createdAutor) => {
        this.addAutor.emit(createdAutor);
        this.messageType = 'success';
        this.messageTitle = 'Autor cadastrado com sucesso!';
        this.messageDescription = 'O autor foi adicionado à base de dados.';
        this.showMessageModal = true;

        this.close.emit();
        this.reset();
      },
      error: (err) => {
        console.error('Erro ao cadastrar autor:', err);
        this.messageType = 'error';
        this.messageTitle = 'Erro ao cadastrar o autor';
        this.messageDescription = 'Não foi possível cadastrar o autor. Verifique os dados.';
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
    this.newAutor = {
      nome: ''
    };
  }
}