import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isClosed = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    // Escuta o estado global da sidebar (reativamente)
    this.sidebarService.sidebarState$.subscribe(state => {
      this.isClosed = state;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar(); // usa o método reativo do serviço
  }

  menuItems = [
    { label: 'Livros', icon: '📚', route: '/livros' },
    { label: 'Empréstimos', icon: '📦', route: '/emprestimos' },
    { label: 'Cadastro de Cliente', icon: '👤', route: '/clientes' }
  ];
}
 