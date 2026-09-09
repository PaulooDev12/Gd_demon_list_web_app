import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";


@Component({
  imports: [RouterLink],
  selector: 'app-side-menu',
  styleUrl: './side-menu.scss',
  templateUrl: './side-menu.html',
})
export class SideMenu {
  @Input() isOpen: boolean = false;
  @Output() toogle = new EventEmitter<void>();

  constructor(private element: ElementRef){}
  
  
  onClose(): void{
    
    this.toogle.emit();
  }
}
