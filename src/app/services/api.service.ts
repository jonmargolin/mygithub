import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../board-store/board.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  /* implement here the http request  */
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('https://lj14g.wiremockapi.cloud/mockdata');
    // remove this for debugging with mock data
    //+ return of(taskMock);
  }
}
