import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { DebounceDirective } from '../directive/debounce.directive';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    DebounceDirective,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  @Output() valueChanged = new EventEmitter<string>();
  onSearch(event: unknown) {
    const currentEvent = event as ExtendedInputEvent;
    if (currentEvent && currentEvent.target) {
      const value = currentEvent.target.value;
      this.valueChanged.emit(value);
    }
  }
}
interface ExtendedEventTarget extends EventTarget {
  value: string;
}

interface ExtendedInputEvent extends InputEvent {
  target: ExtendedEventTarget;
}
