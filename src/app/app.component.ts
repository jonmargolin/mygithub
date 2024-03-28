import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BoardComponent } from './board/board.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { CommonModule } from '@angular/common';
import { TaskStore } from './board-store/borad.store';
import { TaskService } from './services/task-service.service';
import { TaskStatus } from './board-store/board.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent,
    SearchBarComponent,
    BoardComponent,
    TextInputComponent,
    CommonModule,
  ],
  providers: [TaskStore, TaskService],
})
export class AppComponent {
  title = 'my-github';
  readonly store = inject(TaskStore);
  constructor(public taskService: TaskService) {
   
  }

  handleBoardEvent($event: TaskStatus) {
    this.taskService.updateColumnType($event, true);
  }
  handleTextEvent($event: string) {
    this.taskService.closeInput();
    this.store.addTask(
      $event,
      this.taskService.columnType() ?? TaskStatus.toDo,
    );
  }
  handleCloseInputEvent() {
    this.taskService.closeInput();
  }
  handleValueChnage($event: string) {
    this.store.searchChange($event);
    }
}
