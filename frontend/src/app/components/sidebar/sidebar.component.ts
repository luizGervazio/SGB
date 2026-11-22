import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { SidebarService } from '../../services/sidebar.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, LucideAngularModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isClosed = false;

  menuItems = [
    { label: 'Livros', icon: 'book-open', route: '/livros' },
    { label: 'Empréstimos', icon: 'arrow-left-right', route: '/emprestimos' },
    { label: 'Clientes', icon: 'users', route: '/clientes' },
    { label: 'Autores', icon: 'feather', route: '/autores' },
  ];

  constructor(
    private sidebarService: SidebarService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.sidebarService.sidebarState$.subscribe((state) => {
      this.isClosed = state;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  sair() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
