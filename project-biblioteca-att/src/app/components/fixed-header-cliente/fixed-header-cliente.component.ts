import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarService } from '../../services/sidebar.service';
import { AddClientModalComponent } from '../../modals/add-client-modal/add-client-modal.component';

@Component({
  selector: 'app-fixed-header-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule,AddClientModalComponent],
  templateUrl: './fixed-header-cliente.component.html',
  styleUrls: ['./fixed-header-cliente.component.css']
})
export class FixedHeaderComponentCliente implements OnInit {
  @Input() title: string = 'Título';
  @Input() placeholder: string = 'Buscar...';
  @Input() addButtonLabel: string = 'Adicionar';

  @Output() onSearch = new EventEmitter<string>();
  @Output() onAdd = new EventEmitter<any>(); // você pode remover isso se controlar tudo internamente

  searchTerm: string = '';
  isSidebarClosed = false;

  showAddBookModal = false;

  constructor(private sidebarService: SidebarService) {}

  
  ngOnInit(): void {
    this.sidebarService.sidebarState$.subscribe(state => {
      this.isSidebarClosed = state;
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