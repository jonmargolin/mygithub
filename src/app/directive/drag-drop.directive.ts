import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDragDrop]',
  standalone: true,
})
export class DragDropDirective {
  @Output() dropEventEmitter: EventEmitter<HTMLElement> = new EventEmitter();

  constructor() {}

  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  @HostListener('drop', ['$event']) onDropEvent(event: DragEvent) {
    event.preventDefault();
    this.dropEventEmitter.emit();
  }
}
