import { HttpClient } from '@angular/common/http';
import { Inject ,Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoAdd } from '../models/todo-add';
import { map } from 'rxjs';
import { TodoUpdate } from '../models/todo-update';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient, @Inject("BASE_API_URL") private baseURl: string) { }

  getAll(){
    return this.http.get<Todo[]>(`${this.baseURl}/api/Todos`);
  }

  getById(id: number){
    return this.http.get<Todo>(`${this.baseURl}/api/Todos/${id}`);
  }

  add(todo: TodoAdd){
    return this.http.post<Response>(`${this.baseURl}/api/Todos`, todo, {observe: 'response'}).pipe(map((response) => response.status==201));
  }

  delete(id: number){
    return this.http.delete<Response>(`${this.baseURl}/api/Todos/${id}`,{observe: 'response'}).pipe(map((response) => response.status==204));
  }
  update(todo: TodoUpdate){
    return this.http.put<Response>(`${this.baseURl}/api/Todos/${todo.id}`, todo,{observe: 'response'}).pipe(map((response) => response.status==204));
  }
  isCompleted(id: number){
    return this.http.put<Response>(`${this.baseURl}/api/Todos/IsCompleted/${id}`,{},{observe: 'response'}).pipe(map((response) => response.status==204));
  }
}
