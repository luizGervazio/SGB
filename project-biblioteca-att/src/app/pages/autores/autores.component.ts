import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FixedHeaderComponentCliente } from '../../components/fixed-header-cliente/fixed-header-cliente.component';
import { RouterOutlet } from '@angular/router';
import { MainTableComponent } from '../../components/main-table-cliente/main-table-cliente.component';

@Component({
  selector: 'app-autores',
  imports: [RouterOutlet, SidebarComponent, FixedHeaderComponentCliente, MainTableComponent, HttpClientModule, ],
  templateUrl: './autores.component.html',
})
export class AutoresComponent {
    title = 'SGBE';

  buscarCliente(value: string) {
    console.log('Busca:', value);
  }

  abrirModalCliente() {
    console.log('Abrir modal de cliente');
  }
}
