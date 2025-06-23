import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorService } from '../../services/autor.service'; // importa o service

@Component({
  selector: 'app-remove-autor-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './remove-autor-modal.component.html',
  styleUrls: ['./remove-autor-modal.component.css']
})
export class RemoveAutorModalComponent {
  @Input() isOpen: boolean = false;
  @Input() autor: any;

  @Output() close = new EventEmitter<void>();
  @Output() removed = new EventEmitter<number>(); // emite o ID removido

  constructor(private autorService: AutorService) {}

  cancel() {
    this.close.emit();
  }

  confirmRemove() {
    if (!this.autor || !this.autor.id) return;

    this.autorService.deleteAutor(this.autor.id).subscribe({
      next: () => {
        this.removed.emit(this.autor.id); // informa ao pai que foi removido
        this.close.emit();               // fecha o modal
      },
      error: (err) => {
        console.error('Erro ao remover Autor:', err);
      }
    });
  }
}