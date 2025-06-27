import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    console.log('🚨 AuthGuard ativado');

    if (this.authService.isLoggedIn()) {
      console.log('✅ Usuário autenticado');
      return true;
    } else {
      console.warn('⛔️ Acesso bloqueado, redirecionando para /login');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
