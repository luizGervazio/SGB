import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FixedHeaderComponent } from '../../components/fixed-header/fixed-header.component';
import { MainTableComponent } from "../../components/main-table/main-table.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-emprestimos',
  imports: [RouterOutlet,SidebarComponent, FixedHeaderComponent, HttpClientModule, MainTableComponent],
  templateUrl: './emprestimos.component.html',
})
export class EmprestimosComponent {
  title = 'SGBE';

  buscarLivro(value: string) {
    console.log('Busca:', value);
  }

  abrirModalLivro() {
    console.log('Abrir modal de livro');
  }
}
