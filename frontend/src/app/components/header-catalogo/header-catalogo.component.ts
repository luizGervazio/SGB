import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header-catalogo',
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './header-catalogo.component.html',
  styleUrl: './header-catalogo.component.css',
})
export class HeaderCatalogoComponent {
  @Input() totalLivros = 0;
}
