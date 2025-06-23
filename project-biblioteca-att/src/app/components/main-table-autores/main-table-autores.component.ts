import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarService } from '../../services/sidebar.service';
import { RemoveAutorModalComponent } from '../../modals/remove-autor-modal/remove-autor-modal.component';
import { EditAutorModalComponent } from '../../modals/edit-autor-modal/edit-autor-modal.component';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-main-table-autor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RemoveAutorModalComponent,
    EditAutorModalComponent // ✅ Importa o componente de edição
  ],
  templateUrl: './main-table-autores.component.html',
  styleUrls: ['./main-table-autores.component.css']
})
export class MainTableAutorComponent implements OnInit {
  filtro: string = '';
  isSidebarClosed: boolean = false;

  autores: any[] = [];

  showRemoveAutorModal: boolean = false;
  autorToRemove: any = null;

  showEditAutorModal: boolean = false;
  selectedAutor: any = null;

  constructor(
    private sidebarService: SidebarService,
    private autorService: AutorService
  ) {}

  ngOnInit(): void {
    this.sidebarService.sidebarState$.subscribe(state => {
      this.isSidebarClosed = state;
    });

    this.carregarAutor(); // ✅ Chama o método extraído
  }

  // ✅ Padrão aplicado: método separado para buscar clientes
  carregarAutor(): void {
    this.autorService.getAutor().subscribe((res) => {
      this.autores = res;
    });
  }

  autoresFiltrados() {
    const texto = this.filtro.toLowerCase();
    return this.autores.filter(c =>
      c.nome.toLowerCase().includes(texto) 
    );
  }

  // Edição
  openEditAutorModal(autores: any) {
    this.selectedAutor = { ...autores };
    this.showEditAutorModal = true;
  }

  closeEditAutorModal() {
    this.selectedAutor = null;
    this.showEditAutorModal = false;
  }

  updateAutor(updated: any) {
    this.autorService.updateAutor(updated.id, updated).subscribe(response => {
      const index = this.autores.findIndex(c => c.id === response.id);
      if (index !== -1) {
        this.autores[index] = response;
      }
      this.closeEditAutorModal();
    });
  }

  // Remoção
  openRemoveAutorModal(autor: any) {
    this.autorToRemove = autor;
    this.showRemoveAutorModal = true;
  }

  closeRemoveAutorModal() {
    this.autorToRemove = null;
    this.showRemoveAutorModal = false;
  }

  removeAutor(autor: any) {
    this.autorService.deleteAutor(autor.id).subscribe(() => {
      this.autores = this.autores.filter(c => c.id !== autor.id);
      this.closeRemoveAutorModal();
    });
  }
}