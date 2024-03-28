import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  input,
} from '@angular/core';
import { ColumnHeaderComponent } from '../column-header/column-header.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { AddButtonComponent } from '../components/add-button/add-button.component';
import { Task, TaskStatus } from '../board-store/board.model';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-board-column',
  standalone: true,
  imports: [
    ColumnHeaderComponent,
    TaskListComponent,
    AddButtonComponent,
    JsonPipe,
    CommonModule,
  ],
  templateUrl: './board-column.component.html',
  styleUrl: './board-column.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardColumnComponent {
  tasks = input<Task[]>();
  @Input() columnType!: TaskStatus;
  @Input() dropListId!: string;
  @Output() buttonEventEmitter = new EventEmitter<TaskStatus>();
  @Output() dragStartEvent = new EventEmitter<Task>();
  @Output() removeTaskEvent = new EventEmitter<string>();
  handleButtonEvent($event: TaskStatus) {
    this.buttonEventEmitter.emit($event);
  }
  handelDrageEvent(task: Task) {
    this.dragStartEvent.emit(task);
  }
  handleRemoveTask($event: string) {
    this.removeTaskEvent.emit($event);
  }
}
