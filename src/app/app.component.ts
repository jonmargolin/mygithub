import {
  Component,
  OnInit,
  OnDestroy,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BoardComponent } from './board/board.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { CommonModule } from '@angular/common';
import { TaskStore } from './board-store/borad.store';
import { TaskService } from './services/task-service.service';
import { TaskStatus } from './board-store/board.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from './services/notification.service';
import { Subscription } from 'rxjs';

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
    MatProgressSpinnerModule,
  ],
  providers: [TaskStore, TaskService, NotificationService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-github';
  readonly store = inject(TaskStore);
  private subscription!: Subscription;
  constructor(
    public taskService: TaskService,
    private notificationService: NotificationService,
    private _snackBar: MatSnackBar,
  ) {}
  ngOnInit() {
    this.subscription = this.notificationService.notification$.subscribe(
      (message) => {
        this.openSnackBar(message);
      },
    );
    this.store.loadTask();
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
  openSnackBar(error: string) {
    this._snackBar.open('something want wrong', error, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000,
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
