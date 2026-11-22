import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FixedHeaderComponentEmprestimo } from '../../components/fixed-header-emprestimo/fixed-header-emprestimo.component';
import { RouterOutlet } from '@angular/router';
import { MainTableEmprestimoComponent } from '../../components/main-table-emprestimo/main-table-emprestimo.component';

@Component({
  selector: 'app-emprestimo',
  imports: [RouterOutlet, SidebarComponent, FixedHeaderComponentEmprestimo, MainTableEmprestimoComponent, HttpClientModule, ],
  templateUrl: './emprestimos.component.html',
})
export class EmprestimosComponent {
    title = 'SGBE';

  buscarEmprestimo(value: string) {
    console.log('Busca:', value);
  }

  abrirModalEmprestimo() {
    console.log('Abrir modal de cliente');
  }
}
