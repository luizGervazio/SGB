import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AutorService {
  private apiUrl = 'http://localhost:3000/autor';

  // 🔁 Subject para notificar alterações
  private autoresAtualizados$ = new BehaviorSubject<void>(undefined);

  constructor(private http: HttpClient) {}

  // 🔊 Observável para que os componentes se inscrevam
  getAtualizacoes(): Observable<void> {
    return this.autoresAtualizados$.asObservable();
  }

  getAutor(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addAutor(autor: any): Observable<any> {
    return this.http.post(this.apiUrl, autor).pipe(
      tap(() => this.autoresAtualizados$.next())
    );
  }

  updateAutor(id: number, autor: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, autor).pipe(
      tap(() => this.autoresAtualizados$.next())
    );
  }

  deleteAutor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.autoresAtualizados$.next())
    );
  }
}
