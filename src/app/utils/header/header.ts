import { Component } from '@angular/core';
import { SideMenu } from "../side-menu/side-menu";

@Component({
  imports: [SideMenu],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
   isMenuOpen: boolean = false;
    toogleMenu(): void{
      this.isMenuOpen = !this.isMenuOpen;
    }
}
