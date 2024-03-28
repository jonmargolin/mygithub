import { Injectable, signal } from '@angular/core';
import { TaskStatus } from '../board-store/board.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private isOpenSignal = signal(false);
  readonly isOpen = this.isOpenSignal.asReadonly();
  private columnTypeSignal = signal<TaskStatus | null>(null);
  readonly columnType = this.columnTypeSignal.asReadonly();

  constructor() {}

  updateColumnType(columnType: TaskStatus, isOpen: boolean): void {
    this.columnTypeSignal.update(() => columnType);
    this.isOpenSignal.update(() => isOpen);
  }
  closeInput(): void {
    this.isOpenSignal.update(() => false);
  }
}
