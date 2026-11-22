import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { capaLivro, nomesAutores } from '../../shared/capa';

@Component({
  selector: 'app-card',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() livro!: any;

  get autores(): string {
    return nomesAutores(this.livro);
  }

  get capa(): string {
    return capaLivro(this.livro);
  }
}
