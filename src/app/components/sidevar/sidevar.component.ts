import { Component } from '@angular/core';

@Component({
  selector: 'sidevar',
  imports: [],
  templateUrl: './sidevar.component.html',
  styleUrl: './sidevar.component.scss'
})
export class SidevarComponent {


  public sidevar = false;

  openside(){
    this.sidevar = !this.sidevar;
  }

}
