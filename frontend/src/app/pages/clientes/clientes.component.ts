import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FixedHeaderComponentCliente } from '../../components/fixed-header-cliente/fixed-header-cliente.component';
import { MainTableComponent } from '../../components/main-table-cliente/main-table-cliente.component';

@Component({
  selector: 'app-clientes',
  imports: [SidebarComponent, FixedHeaderComponentCliente, MainTableComponent],
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {
  /** Texto digitado na busca do cabeçalho, repassado para a tabela */
  termo = '';
}
