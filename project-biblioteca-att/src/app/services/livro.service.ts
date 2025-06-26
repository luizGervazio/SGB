import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LivroService {
  private apiUrl = 'http://localhost:3000/livro';

  private livrosAtualizados$ = new BehaviorSubject<void>(undefined);

  constructor(private http: HttpClient) {}

  getAtualizacoes(): Observable<void> {
    return this.livrosAtualizados$.asObservable();
  }

  getLivros(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addLivro(livro: any): Observable<any> {
    return this.http.post(this.apiUrl, livro).pipe(
      tap(() => this.livrosAtualizados$.next())
    );
  }

  updateLivro(id: number, livro: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, livro).pipe(
      tap(() => this.livrosAtualizados$.next())
    );
  }

  deleteLivro(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.livrosAtualizados$.next()) // 🔁 isso avisa o catálogo
    );
  }
}
