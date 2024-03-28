import { Component, Input } from '@angular/core';
import { TaskStatus } from '../board-store/board.model';

@Component({
  selector: 'app-column-header',
  standalone: true,
  imports: [],
  templateUrl: './column-header.component.html',
  styleUrl: './column-header.component.scss',
})
export class ColumnHeaderComponent {
  @Input() title!: TaskStatus;
  @Input() length!: number;
  public getColor(): string {
    if (this.title === TaskStatus.inProgress) {
    return "bg-yellow-200";
   }
   return "bg-yellow-200"
  }
}
