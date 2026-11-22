import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-catalogo',
  imports: [CommonModule],
  templateUrl: './header-catalogo.component.html',
  styleUrl: './header-catalogo.component.css'
})
export class HeaderCatalogoComponent {
  @Input() totalLivros!: number;
}