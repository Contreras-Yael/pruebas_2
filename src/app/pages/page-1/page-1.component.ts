import { NgForOf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-1',
  standalone: true,
  templateUrl: './page-1.component.html',
  styleUrl: './page-1.component.scss',
  imports: [NgForOf],
})

export class Page1Component {

  public nombre: string
  public extra: string;

  public bucle: any[]=["home","home","home","home","home","home","home"];

  @Input() empuje=false;

  @Input() IsOpen= false;

  @Output() apertura= new EventEmitter<void>();

  abrir(){
    this.apertura.emit();
  }

  constructor(){

  this.nombre = "aaaa";
  this.extra = "TUSI";

  console.log("Mas carga");

}

}
