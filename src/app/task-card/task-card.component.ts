import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCardComponent {
  @Input() title!: string;
  @Input() taskId!: string;
  @Output() removeButtonEmitter = new EventEmitter<string>();
  handleRemoveTask() {
    this.removeButtonEmitter.emit(this.taskId);
  }
}
