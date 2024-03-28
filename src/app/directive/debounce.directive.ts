import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Directive({
  selector: '[appDebounce]',
  standalone: true,
})
export class DebounceDirective implements OnDestroy {
  @Input() debounceTime = 500; // Default debounce time in milliseconds
  @Output() debounceEvent = new EventEmitter<unknown>();

  private inputs = new Subject<unknown>();
  private subscription: Subscription;

  constructor() {
    this.subscription = this.inputs
      .pipe(debounceTime(this.debounceTime))
      .subscribe((e) => this.debounceEvent.emit(e));
  }

  @HostListener('input', ['$event'])
  onInput(event: InputEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.inputs.next(event);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
