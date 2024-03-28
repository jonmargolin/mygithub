import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  input,
} from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { CommonModule } from '@angular/common';
import { Task } from '../board-store/board.model';
import { JsonPipe } from '@angular/common';
import { DragDropDirective } from '../directive/drag-drop.directive';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskCardComponent, CommonModule, JsonPipe, DragDropDirective],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  tasks = input<Task[]>();
  @Output() dragStartEvent = new EventEmitter<Task>();
  onDragStart(task: Task) {
    this.dragStartEvent.emit(task);
  }
}
