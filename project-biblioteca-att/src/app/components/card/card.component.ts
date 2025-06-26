import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() livro!: any;
  get nomesAutores(): string {
  return this.livro?.autores?.map((a: any) => a.nome).join(', ') || 'Autor desconhecido';
}

}