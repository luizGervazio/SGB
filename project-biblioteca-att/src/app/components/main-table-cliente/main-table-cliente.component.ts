import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarService } from '../../services/sidebar.service';
import { RemoveClienteModalComponent } from '../../modals/remove-cliente-modal/remove-cliente-modal.component';
import { EditClienteModalComponent } from '../../modals/edit-cliente-modal/edit-cliente-modal.component';

import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-main-table-cliente',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RemoveClienteModalComponent,
    EditClienteModalComponent // ✅ Importa o componente de edição
  ],
  templateUrl: './main-table-cliente.component.html',
  styleUrls: ['./main-table-cliente.component.css']
})
export class MainTableComponent implements OnInit {
  filtro: string = '';
  isSidebarClosed: boolean = false;

  clientes: any[] = [];

  showRemoveClienteModal: boolean = false;
  clienteToRemove: any = null;

  showEditClienteModal: boolean = false;
  selectedCliente: any = null;

  constructor(
    private sidebarService: SidebarService,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.sidebarService.sidebarState$.subscribe(state => {
      this.isSidebarClosed = state;
    });

    this.carregarClientes(); // ✅ Chama o método extraído
  }

  // ✅ Padrão aplicado: método separado para buscar clientes
  carregarClientes(): void {
    this.clienteService.getClientes().subscribe((res) => {
      this.clientes = res;
    });
  }

  clientesFiltrados() {
    const texto = this.filtro.toLowerCase();
    return this.clientes.filter(c =>
      c.nome.toLowerCase().includes(texto) ||
      c.email.toLowerCase().includes(texto) ||
      c.telefone.toLowerCase().includes(texto) ||
      c.cpf.toLowerCase().includes(texto) ||
      c.endereco.toLowerCase().includes(texto) ||
      c.numero.toString().includes(texto) ||
      c.cidade.toLowerCase().includes(texto) ||
      c.status.toLowerCase().includes(texto)
    );
  }

  // Edição
  openEditClienteModal(cliente: any) {
    this.selectedCliente = { ...cliente };
    this.showEditClienteModal = true;
  }

  closeEditClienteModal() {
    this.selectedCliente = null;
    this.showEditClienteModal = false;
  }

  updateCliente(updated: any) {
    this.clienteService.updateCliente(updated.id, updated).subscribe(response => {
      const index = this.clientes.findIndex(c => c.id === response.id);
      if (index !== -1) {
        this.clientes[index] = response;
      }
      this.closeEditClienteModal();
    });
  }

  // Remoção
  openRemoveClienteModal(cliente: any) {
    this.clienteToRemove = cliente;
    this.showRemoveClienteModal = true;
  }

  closeRemoveClienteModal() {
    this.clienteToRemove = null;
    this.showRemoveClienteModal = false;
  }

  removeCliente(cliente: any) {
    this.clienteService.deleteCliente(cliente.id).subscribe(() => {
      this.clientes = this.clientes.filter(c => c.id !== cliente.id);
      this.closeRemoveClienteModal();
    });
  }
}