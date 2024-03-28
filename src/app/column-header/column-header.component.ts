import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
} from '@angular/core';
import { Task, TaskStatus } from '../board-store/board.model';

@Component({
  selector: 'app-column-header',
  standalone: true,
  imports: [],
  templateUrl: './column-header.component.html',
  styleUrl: './column-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnHeaderComponent {
  @Input() title!: TaskStatus;
  readonly length = input<Task[]>();
  get taskColor(): string {
    if (this.title === TaskStatus.toDo) {
      return 'w-[24px] h-[24px] rounded-full bg-yellow-200';
    }
    if (this.title === TaskStatus.inProgress) {
      return 'w-[24px] h-[24px] rounded-full bg-green-200';
    }
    if (this.title === TaskStatus.done) {
      return 'w-[24px] h-[24px] rounded-full bg-sky-200';
    }
    return 'w-[24px] h-[24px] rounded-full bg-sky-200';
  }
}
