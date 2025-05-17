import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service'; // ✅ Certifique-se do caminho

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isClosed = false;

  constructor(private sidebarService: SidebarService) {}

  toggleSidebar() {
    this.isClosed = !this.isClosed;
    this.sidebarService.setSidebarState(this.isClosed);
  }

  menuItems = [
    { label: 'Livros', icon: '📚', route: '/livros' },
    { label: 'Empréstimos', icon: '📦', route: '/emprestimos' },
    { label: 'Cadastro de Cliente', icon: '👤', route: '/pessoas/cadastro' }
  ];
}
