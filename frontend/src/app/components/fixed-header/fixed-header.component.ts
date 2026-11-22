import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarService } from '../../services/sidebar.service';
import { AddBookModalComponent } from '../../modals/add-book-modal/add-book-modal.component';

@Component({
  selector: 'app-fixed-header',
  standalone: true,
  imports: [CommonModule, FormsModule, AddBookModalComponent], // ✅ import do modal
  templateUrl: './fixed-header.component.html',
  styleUrls: ['./fixed-header.component.css']
})
export class FixedHeaderComponent implements OnInit {
  @Input() title: string = 'Título';
  @Input() placeholder: string = 'Buscar...';
  @Input() addButtonLabel: string = 'Adicionar';

  @Output() onSearch = new EventEmitter<string>();
  @Output() onAdd = new EventEmitter<any>(); // você pode remover isso se controlar tudo internamente

  searchTerm: string = '';
  isSidebarClosed = false;

  // ✅ controle do modal
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
  console.log('Livro adicionado:', book);
  this.closeModal();
}

}