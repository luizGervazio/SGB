import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-detalhes',
  imports: [],
  templateUrl: './card-detalhes.component.html',
  styleUrl: './card-detalhes.component.css'
})
export class CardDetalhesComponent {
@Input() livro!: any;
 @Output() fechar = new EventEmitter<void>(); // Evento de fechamento
  get nomesAutores(): string {
  return this.livro?.autores?.map((a: any) => a.nome).join(', ') || 'Autor desconhecido';  
}

onClose(): void {
    this.fechar.emit(); // Notifica o componente pai
  }

  
}