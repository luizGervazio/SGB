import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarService } from '../../services/sidebar.service';
import { AddAutorModalComponent } from '../../modals/add-autor-modal/add-autor-modal.component';

@Component({
  selector: 'app-fixed-header-autores',
  standalone: true,
  imports: [CommonModule, FormsModule, AddAutorModalComponent], 
  templateUrl: './fixed-header-autores.component.html',
  styleUrls: ['./fixed-header-autores.component.css']
})
export class FixedHeaderAutorComponent implements OnInit {
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

handleAddBook(book: any) {
  console.log('Autor adicionado:', book);
  this.closeModal();
}

}