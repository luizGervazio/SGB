import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmprestimoService {
  private apiUrl = 'http://localhost:3000/emprestismo';

  constructor(private http: HttpClient) {}

  getEmprestimos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addEmprestimo(emprestimo: any): Observable<any> {
    return this.http.post(this.apiUrl, emprestimo);
  }

  updateEmprestimo(id: number, emprestimo: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, emprestimo);
  }

  deleteEmprestimo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' as 'json' });
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