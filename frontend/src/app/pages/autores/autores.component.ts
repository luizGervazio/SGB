import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FixedHeaderAutorComponent } from '../../components/fixed-header-autores/fixed-header-autores.component';
import { MainTableAutorComponent } from '../../components/main-table-autores/main-table-autores.component';

@Component({
  selector: 'app-autores',
  imports: [SidebarComponent, FixedHeaderAutorComponent, MainTableAutorComponent],
  templateUrl: './autores.component.html',
})
export class AutoresComponent {
  /** Texto digitado na busca do cabeçalho, repassado para a tabela */
  termo = '';
}
