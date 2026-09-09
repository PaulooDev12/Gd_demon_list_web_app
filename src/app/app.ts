import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { Header } from './utils/header/header';

@Component({
  imports: [RouterOutlet, Header],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html'
})
export class App{
   
}
