import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { capaLivro, nomesAutores } from '../../shared/capa';

@Component({
  selector: 'app-card-detalhes',
  imports: [LucideAngularModule],
  templateUrl: './card-detalhes.component.html',
  styleUrl: './card-detalhes.component.css',
})
export class CardDetalhesComponent {
  @Input() livro!: any;
  @Output() fechar = new EventEmitter<void>();

  get autores(): string {
    return nomesAutores(this.livro);
  }

  get capa(): string {
    return capaLivro(this.livro);
  }

  @HostListener('document:keydown.escape')
  onClose(): void {
    this.fechar.emit();
  }
}
