import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';

  // Notificação para quando o login for bem-sucedido
  private loginStatus$ = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private http: HttpClient) {}

  getLoginStatus(): Observable<boolean> {
    return this.loginStatus$.asObservable();
  }

  login(email: string, senha: string): Observable<{ access_token: string }> {
    return this.http
      .post<{ access_token: string }>(`${this.apiUrl}/login`, { email, senha })
      .pipe(
        tap((res) => {
          localStorage.setItem('token', res.access_token);
          this.loginStatus$.next(true);
        })
      );
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email });
  }

  resetPassword(token: string, novaSenha: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password`, {
      token,
      novaSenha,
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.loginStatus$.next(false);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
