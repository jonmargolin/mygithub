import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Input() ignoreClass!: string;
  @Output() clickOutsideElement = new EventEmitter<MouseEvent>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    const ignoredElementClicked = this.ignoreClass
      ? targetElement.classList.contains(this.ignoreClass)
      : false;
    if (!clickedInside && !ignoredElementClicked) {
      this.clickOutsideElement.emit(event);
    }
  }
}
