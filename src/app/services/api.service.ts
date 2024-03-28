import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../board-store/board.model';
import { taskMock } from '../board-store/task.mock';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl =
    'https://frontend-kanban-node-be.azurewebsites.net/api/GetTasks?code=-9J4AUVTzvP7DBtjNPzNDMz_Sc0fK068G-6Ji8GQjOhjAzFuqchHLw==';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return of(taskMock);
  }
}
