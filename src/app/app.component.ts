import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Page1Component} from './pages/page-1/page-1.component';
import {Page2Component} from './pages/page-2/page-2.component';
import { Infocard } from './components/card/card.component';
import { SidevarComponent } from './components/sidevar/sidevar.component';
import { PruebaComponent } from './components/prueba/prueba.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Page1Component, Page2Component, SidevarComponent,Infocard, PruebaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public sidevarEstado = false;

  cambiarEstado(nuevoEstado: boolean) {
    this.sidevarEstado = nuevoEstado;
  }

}
