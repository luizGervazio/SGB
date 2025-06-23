import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AutorService {
  private apiUrl = 'http://localhost:3000/autor';

  constructor(private http: HttpClient) {}

  getAutor(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addAutor(autor: any): Observable<any> {
    return this.http.post(this.apiUrl, autor);
  }

  updateAutor(id: number, autor: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, autor);
  }

  deleteAutor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}