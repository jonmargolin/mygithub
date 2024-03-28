import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from '../../directive/click-outside.directive';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ClickOutsideDirective,
  ],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent {
  @ViewChild('message') message!: ElementRef<HTMLInputElement>;
  @Output() inputTextEventEmitter = new EventEmitter<string>();
  @Output() closeInputTextEventEmitter = new EventEmitter<void>();
  constructor() {}

  onEnter(value: string): void {
    this.inputTextEventEmitter.emit(value);
    // Add your logic to handle the input value here
  }
  onOutsideClick() {
    this.closeInputTextEventEmitter.emit();
  }
}
