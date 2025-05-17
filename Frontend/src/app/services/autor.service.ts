import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AutorService {
  private apiUrl = 'http://localhost:3000/autor';

  constructor(private http: HttpClient) {}

  getAutores(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
