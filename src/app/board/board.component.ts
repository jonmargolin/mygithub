import { Component, EventEmitter, Output, inject } from '@angular/core';
import { BoardColumnComponent } from '../board-column/board-column.component';
import { TaskStore } from '../board-store/borad.store';
import { Task, TaskStatus } from '../board-store/board.model';
import { TaskService } from '../services/task-service.service';
import { DragDropDirective } from '../directive/drag-drop.directive';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [BoardColumnComponent, DragDropDirective],
  providers: [TaskService],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  readonly store = inject(TaskStore);
  readonly statusEnum = TaskStatus;
  currentDraggedTask: Task | null = null;
  @Output() buttonEventEmitter = new EventEmitter<TaskStatus>();
  @Output() dragStartEvent = new EventEmitter<Task>();
  handleButtonEmit($event: TaskStatus) {
    this.buttonEventEmitter.emit($event);
  }
  constructor() {
    console.log('board', this.store.tasks());
  }
  handleDrop(targetStatus: TaskStatus) {
    if (
      this.currentDraggedTask &&
      targetStatus !== this.currentDraggedTask?.status
    ) {
      const taskId = this.currentDraggedTask.id;
      this.store.moveTaskColumn(taskId, targetStatus);
    }
  }
  handelDragStart($event: Task) {
    this.currentDraggedTask = $event;
  }
  handelRemoveTask($event: string) {
    this.store.removeTask($event);
  }
}
