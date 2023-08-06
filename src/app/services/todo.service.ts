import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todos } from '../models/tomodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
baseApiUrl:string="https://localhost:7279";

  constructor(private http:HttpClient) { }
  getAllTodos(): Observable<Todos[]>{
    return this.http.get<Todos[]>(this.baseApiUrl+'/api/Todos');
  }
}
