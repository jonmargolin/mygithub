import {
  Component,
  EventEmitter,
  Output,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BoardColumnComponent } from '../board-column/board-column.component';
import { TaskStore } from '../board-store/borad.store';
import { Task, TaskStatus } from '../board-store/board.model';
import { DragDropDirective } from '../directive/drag-drop.directive';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [BoardColumnComponent, DragDropDirective],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  constructor() {}
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
