import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private readonly apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  get<T>(recurso: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${recurso}`);
  }
}
