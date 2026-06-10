import { Component } from '@angular/core';

@Component({
  selector: 'app-page-1',
  templateUrl: './page-1.component.html',
  styleUrl: './page-1.component.scss',
  imports: [],
})

export class Page1Component {

  public nombre: string
  public extra: string;


constructor(){

  this.nombre = "aaaa";
  this.extra = "TUSI";

  console.log("Mas carga");
  alert("Nada");

}

}
