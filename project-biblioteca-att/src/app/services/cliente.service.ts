import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private apiUrl = 'http://localhost:3000/cliente';

  // 🔁 Notificador reativo
  private clientesAtualizados$ = new BehaviorSubject<void>(undefined);

  constructor(private http: HttpClient) {}

  // 📡 Para componentes se inscreverem
  getAtualizacoes(): Observable<void> {
    return this.clientesAtualizados$.asObservable();
  }

  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addCliente(cliente: any): Observable<any> {
    return this.http.post(this.apiUrl, cliente).pipe(
      tap(() => this.clientesAtualizados$.next())
    );
  }

  updateCliente(id: number, cliente: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, cliente).pipe(
      tap(() => this.clientesAtualizados$.next())
    );
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.clientesAtualizados$.next())
    );
  }
}
