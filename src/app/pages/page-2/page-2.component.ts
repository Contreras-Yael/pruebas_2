import { Component } from '@angular/core';
import { camfech } from '../../shared/pipes/camb_fech';

@Component({
  selector: 'app-page-2',
  imports: [camfech],
  templateUrl: './page-2.component.html',
  styleUrl: './page-2.component.scss'
})


export class Page2Component {

  public date = new Date();

  public exaccto: string;

  constructor(){
    this.exaccto = "Inexacto";
  }

}
