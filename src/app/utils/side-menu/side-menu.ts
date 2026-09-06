import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-side-menu',
  styleUrl: './side-menu.scss',
  templateUrl: './side-menu.html',
})
export class SideMenu {
  @Input() isOpen: boolean = false;
  @Output() toogle = new EventEmitter<void>();

  onClose(): void{
    this.toogle.emit();
  }
}
