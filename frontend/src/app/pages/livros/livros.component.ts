import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FixedHeaderComponent } from '../../components/fixed-header/fixed-header.component';
import { MainTableComponent } from '../../components/main-table/main-table.component';

@Component({
  selector: 'app-livros',
  imports: [SidebarComponent, FixedHeaderComponent, MainTableComponent],
  templateUrl: './livros.component.html',
})
export class LivrosComponent {
  /** Texto digitado na busca do cabeçalho, repassado para a tabela */
  termo = '';
}
