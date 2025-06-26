import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-add-autor-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-autor-modal.component.html',
  styleUrls: ['./add-autor-modal.component.css']
})
export class AddAutorModalComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() addAutor = new EventEmitter<any>();

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
    this.autorService.addAutor(autor).subscribe((createdAutor) => {
      this.addAutor.emit(createdAutor);
      this.close.emit();
      this.reset();
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