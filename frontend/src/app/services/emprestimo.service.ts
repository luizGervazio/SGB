import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EmprestimoService {
  private apiUrl = 'http://localhost:3000/emprestismo';

  // 🔁 Notificador reativo
  private emprestimosAtualizados$ = new BehaviorSubject<void>(undefined);

  constructor(private http: HttpClient) {}

  // 📡 Componente pode escutar atualizações
  getAtualizacoes(): Observable<void> {
    return this.emprestimosAtualizados$.asObservable();
  }

  getEmprestimos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addEmprestimo(emprestimo: any): Observable<any> {
  return this.http.post(this.apiUrl, emprestimo).pipe(
    tap(() => this.emprestimosAtualizados$.next())
  );
}

updateEmprestimo(id: number, emprestimo: any): Observable<any> {
  return this.http.patch(`${this.apiUrl}/${id}`, emprestimo).pipe(
    tap(() => this.emprestimosAtualizados$.next())
  );
}

deleteEmprestimo(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' as 'json' }).pipe(
    tap(() => this.emprestimosAtualizados$.next())
  );
}


  // Para buscar os clientes
  getClientes(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/cliente');
  }

  // Para buscar os livros
  getLivros(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/livro');
  }
}
