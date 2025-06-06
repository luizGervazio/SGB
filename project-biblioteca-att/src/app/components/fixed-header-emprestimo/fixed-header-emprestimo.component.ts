import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarService } from '../../services/sidebar.service';
import { AddEmprestimoModalComponent  } from '../../modals/add-emprestimo-modal/add-emprestimo-modal.component';
import { EmprestimoService } from '../../services/emprestimo.service'; // importe o service

@Component({
  selector: 'app-fixed-header-emprestimo',
  standalone: true,
  imports: [CommonModule, FormsModule,AddEmprestimoModalComponent ],
  templateUrl: './fixed-header-emprestimo.component.html',
  styleUrls: ['./fixed-header-emprestimo.component.css']
})
export class FixedHeaderComponentEmprestimo implements OnInit {
  @Input() title: string = 'Título';
  @Input() placeholder: string = 'Buscar...';
  @Input() addButtonLabel: string = 'Adicionar';

  @Output() onSearch = new EventEmitter<string>();
  @Output() onAdd = new EventEmitter<any>(); // você pode remover isso se controlar tudo internamente

  searchTerm: string = '';
  isSidebarClosed = false;

  showAddBookModal = false;

  clientes: any[] = [];
  livros: any[] = [];

  constructor(
    private sidebarService: SidebarService,
    private emprestimoService: EmprestimoService
  ) {}

  
  ngOnInit(): void {
    this.sidebarService.sidebarState$.subscribe(state => {
      this.isSidebarClosed = state;
    });

    this.carregarClientes();
    this.carregarLivros();
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
  
  openModal() {
  this.showAddBookModal = true;
}

closeModal() {
  this.showAddBookModal = false;
}

handleAddClient(book: any) {
  console.log('Cliente adicionado:', book);
  this.closeModal();
}
}


