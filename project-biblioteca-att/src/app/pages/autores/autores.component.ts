import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FixedHeaderAutorComponent } from '../../components/fixed-header-autores/fixed-header-autores.component';
import { RouterOutlet } from '@angular/router';
import { MainTableComponent } from '../../components/main-table-cliente/main-table-cliente.component';

@Component({
  selector: 'app-autores',
  imports: [RouterOutlet, SidebarComponent, FixedHeaderAutorComponent, MainTableComponent, HttpClientModule, ],
  templateUrl: './autores.component.html',
})
export class AutoresComponent {
    title = 'SGBE';

  buscarAutor(value: string) {
    console.log('Busca:', value);
  }

  abrirModalAutor() {
    console.log('Abrir modal de Autores');
  }
}
