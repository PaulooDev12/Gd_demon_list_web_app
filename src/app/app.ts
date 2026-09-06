import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { SideMenu } from "./utils/side-menu/side-menu";

@Component({
  imports: [RouterOutlet, SideMenu],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html'
})
export class App{
    isMenuOpen: boolean = false;
    toogleMenu(): void{
      this.isMenuOpen = !this.isMenuOpen;
    }
}
