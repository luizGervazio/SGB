import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer-catalogo',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './footer-catalogo.component.html',
  styleUrl: './footer-catalogo.component.css',
})
export class FooterCatalogoComponent {}
