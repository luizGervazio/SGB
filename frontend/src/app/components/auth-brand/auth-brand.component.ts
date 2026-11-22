import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

/** Painel da marca exibido à esquerda nas telas de login e recuperação de senha. */
@Component({
  selector: 'app-auth-brand',
  standalone: true,
  imports: [LucideAngularModule],
  host: { class: 'auth-brand' },
  template: `
    <div class="brand-mark">
      <span class="mark"><lucide-icon name="library" [size]="22"></lucide-icon></span>
      SGB
    </div>

    <div>
      <h1>Gestão de biblioteca <span>simples</span> e organizada.</h1>
      <p class="lead">
        Controle o acervo, os leitores e cada empréstimo em um só lugar, com prazos e
        disponibilidade sempre atualizados.
      </p>
      <div class="features">
        <span><lucide-icon name="book-open" [size]="16"></lucide-icon> Acervo</span>
        <span><lucide-icon name="arrow-left-right" [size]="16"></lucide-icon> Empréstimos</span>
        <span><lucide-icon name="calendar-clock" [size]="16"></lucide-icon> Prazos e atrasos</span>
        <span><lucide-icon name="shield-check" [size]="16"></lucide-icon> Acesso com JWT</span>
      </div>
    </div>

    <p class="copyright">SGB · Sistema de Gestão de Biblioteca</p>
  `,
})
export class AuthBrandComponent {}
