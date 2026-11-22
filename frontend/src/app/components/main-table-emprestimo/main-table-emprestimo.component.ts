import { Component, OnInit, Input } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { EmprestimoService } from '../../services/emprestimo.service';
import { RemoveEmprestimoModalComponent } from '../../modals/remove-emprestimo-modal/remove-emprestimo-modal.component';
import { EditEmprestimoModalComponent } from '../../modals/edit-emprestimo-modal/edit-emprestimo-modal.component';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-table-emprestimo',
  standalone: true,
  imports: [
    LucideAngularModule,
    CommonModule,
    FormsModule,
    RemoveEmprestimoModalComponent,
    EditEmprestimoModalComponent // ✅ Importa o componente de edição
  ],
  templateUrl: './main-table-emprestimo.component.html',
  styleUrls: ['./main-table-emprestimo.component.css']
})
export class MainTableEmprestimoComponent implements OnInit {
  @Input() filtro: string = '';
  isSidebarClosed: boolean = false;
  clientes: any[] = [];
  livros: any[] = [];

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

    this.carregarEmprestimos();
    this.carregarClientes();
    this.carregarLivros();

    this.emprestimoService.getAtualizacoes().subscribe(() => {
      this.carregarEmprestimos();
    });
  }

  carregarEmprestimos(): void {
    this.emprestimoService.getEmprestimos().subscribe((res) => {
      this.emprestimos = res;
    });
  }

  
emprestimosFiltrados() {
    const texto = (this.filtro || '').toLowerCase().trim();
    if (!texto) return this.emprestimos;
    return this.emprestimos.filter((e) =>
      [
        e.id?.toString(),
        e.livros?.titulo,
        e.cliente?.nome,
        e.cliente?.email,
        this.situacao(e).texto,
      ].some((campo) => campo?.toLowerCase().includes(texto)),
    );
  }

  /** Texto e cor do badge de situação do empréstimo */
  situacao(e: any): { texto: string; classe: string } {
    if (!e?.statusEmprestismo) return { texto: 'Devolvido', classe: 'badge-success' };
    if (e.atraso) return { texto: 'Atrasado', classe: 'badge-danger' };
    return { texto: 'Em andamento', classe: 'badge-info' };
  }

  /** Iniciais para o avatar (ex.: "Ana Souza" -> "AS") */
  iniciais(nome?: string): string {
    if (!nome) return '?';
    const partes = nome.trim().split(/\s+/);
    const primeira = partes[0]?.[0] ?? '';
    const ultima = partes.length > 1 ? partes[partes.length - 1][0] : '';
    return (primeira + ultima).toUpperCase();
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
      this.closeRemoveEmprestimoModal();
      // A atualização vai acontecer automaticamente via .next()
    });
  }

  carregarClientes() {
    this.emprestimoService.getClientes().subscribe((res) => {
      this.clientes = res;
    });
  }

  carregarLivros() {
    this.emprestimoService.getLivros().subscribe((res) => {
      this.livros = res;
    });
  }

}