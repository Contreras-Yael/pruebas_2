import { Component, Input, OnInit } from '@angular/core';
import { camf2 } from '../../shared/pipes/camb_fech';
import { characrap } from '../../services/apich.service';


@Component({
  selector: 'app-page-2',
  imports: [camf2],
  templateUrl: './page-2.component.html',
  styleUrl: './page-2.component.scss'
})


export class Page2Component implements OnInit {

  public date = new Date();

  public exaccto: string;

  @Input() extra: any;

  constructor(public test:characrap){
    this.exaccto = "Inexacto";
  }

  ngOnInit(): void {
    this.test;
  }

}
