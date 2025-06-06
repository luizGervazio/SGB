import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { EmprestimoService } from '../../services/emprestimo.service';
import { RemoveEmprestimoModalComponent } from '../../modals/remove-emprestimo-modal/remove-emprestimo-modal.component';
import { EditEmprestimoModalComponent } from '../../modals/edit-emprestimo-modal/edit-emprestimo-modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-table-emprestimo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RemoveEmprestimoModalComponent,
    EditEmprestimoModalComponent // ✅ Importa o componente de edição
  ],
  templateUrl: './main-table-emprestimo.component.html',
  styleUrls: ['./main-table-emprestimo.component.css']
})
export class MainTableEmprestimoComponent implements OnInit {
  filtro: string = '';
  isSidebarClosed: boolean = false;

  emprestimos: any[] = [];

  showRemoveEmprestimoModal: boolean = false;
  emprestimoToRemove: any = null;

  showEditEmprestimoModal: boolean = false;
  selectedEmprestimo: any = null;

  constructor(
    private sidebarService: SidebarService,
    private emprestimoService: EmprestimoService
  ) {}

  ngOnInit(): void {
    this.sidebarService.sidebarState$.subscribe(state => {
      this.isSidebarClosed = state;
    });

    this.carregarEmprestimos(); // ✅ Chama o método extraído
  }

  carregarEmprestimos(): void {
    this.emprestimoService.getEmprestimos().subscribe((res) => {
      this.emprestimos = res;
    });
  }

  
emprestimosFiltrados() {
  const texto = this.filtro.toLowerCase();
  return this.emprestimos.filter(e =>
    e.id?.toString().includes(texto) ||
    e.livroId?.toString().includes(texto) || // se livroId for nulo, usa optional chaining
    e.cliente?.id?.toString().includes(texto) || // acessa cliente.id corretamente
    e.dataEmprestimo?.toLowerCase().includes(texto) ||
    e.dataDevolucao?.toLowerCase().includes(texto) ||
    (e.atraso ? 'sim' : 'não').includes(texto) ||
    (e.statusEmprestismo ? 'ativo' : 'finalizado').includes(texto)
  );
}


  // Edição
  openEditEmprestimoModal(emprestimo: any) {
    this.selectedEmprestimo = { ...emprestimo };
    this.showEditEmprestimoModal = true;
  }

  closeEditEmprestimoModal() {
    this.selectedEmprestimo = null;
    this.showEditEmprestimoModal = false;
  }

  updateEmprestimo(updated: any) {
  this.emprestimoService.updateEmprestimo(updated.id, updated).subscribe(response => {
    const index = this.emprestimos.findIndex(c => c.id === response.id);
    if (index !== -1) {
      this.emprestimos[index] = response;
    }
    this.closeEditEmprestimoModal();
  });
}

  // Remoção
  openRemoveEmprestimoModal(emprestimo: any) {
    this.emprestimoToRemove = emprestimo;
    this.showRemoveEmprestimoModal = true;
  }

  closeRemoveEmprestimoModal() {
    this.emprestimoToRemove = null;
    this.showRemoveEmprestimoModal = false;
  }

  removeEmprestimo(emprestimo: any) {
    this.emprestimoService.deleteEmprestimo(emprestimo.id).subscribe(() => {
      this.emprestimos = this.emprestimos.filter(c => c.id !== emprestimo.id);
      this.closeRemoveEmprestimoModal();
    });
  }
}