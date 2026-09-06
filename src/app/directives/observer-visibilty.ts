import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

@Directive({
  selector: '[appObserverVisibilty]',
  standalone: true
})
export class ObserverVisibilty implements AfterViewInit, OnDestroy {
  @Input() threshold = 0.3;
  @Output() visible = new EventEmitter<boolean>();

  constructor(private element: ElementRef){}
 
  private observer: IntersectionObserver | null = null;
  ngAfterViewInit(): void {
    if(typeof IntersectionObserver === 'undefined'){
      this.visible.emit(true);
      return;
    }
    
    const options: IntersectionObserverInit = {
    root: null,
    threshold: this.threshold
  }
  this.observer = new IntersectionObserver(([entry]) => {
    this.visible.emit(entry.isIntersecting);
  }, options)
  this.observer.observe(this.element.nativeElement);
  
}
  ngOnDestroy(): void {
    if(this.observer) this.observer.disconnect();
  }
}
