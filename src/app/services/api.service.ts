import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../board-store/board.model';
import { taskMock } from '../board-store/task.mock';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  /* implement here the http request  */
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return of(taskMock);
  }
}
