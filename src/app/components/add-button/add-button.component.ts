import {
  Component,
  EventEmitter,
  Output,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TaskStatus } from '../../board-store/board.model';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddButtonComponent {
  @Input() columnType!: TaskStatus;
  @Output() emitButtonClick = new EventEmitter<TaskStatus>();

  handleAddButton = () => {
    this.emitButtonClick.emit(this.columnType);
  };
}
