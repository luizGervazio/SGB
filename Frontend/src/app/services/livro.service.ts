import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LivroService {
  private apiUrl = 'http://localhost:3000/livro';

  constructor(private http: HttpClient) {}

  getLivros(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addLivro(livro: any): Observable<any> {
    return this.http.post(this.apiUrl, livro);
  }

  updateLivro(id: number, livro: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, livro);
  }

  deleteLivro(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
