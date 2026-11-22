import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FixedHeaderComponentEmprestimo } from '../../components/fixed-header-emprestimo/fixed-header-emprestimo.component';
import { MainTableEmprestimoComponent } from '../../components/main-table-emprestimo/main-table-emprestimo.component';

@Component({
  selector: 'app-emprestimo',
  imports: [SidebarComponent, FixedHeaderComponentEmprestimo, MainTableEmprestimoComponent],
  templateUrl: './emprestimos.component.html',
})
export class EmprestimosComponent {
  /** Texto digitado na busca do cabeçalho, repassado para a tabela */
  termo = '';
}
