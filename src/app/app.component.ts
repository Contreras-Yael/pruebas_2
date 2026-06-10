import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Page1Component} from './pages/page-1/page-1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Page1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pruebas';
}
