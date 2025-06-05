import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FixedHeaderComponentCliente } from '../../components/fixed-header-cliente/fixed-header-cliente.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-clientes',
  imports: [RouterOutlet, SidebarComponent, FixedHeaderComponentCliente, HttpClientModule, ],
  templateUrl: './clientes.component.html',
})
export class ClientesComponent {
    title = 'SGBE';

  buscarLivro(value: string) {
    console.log('Busca:', value);
  }

  abrirModalLivro() {
    console.log('Abrir modal de livro');
  }
}
