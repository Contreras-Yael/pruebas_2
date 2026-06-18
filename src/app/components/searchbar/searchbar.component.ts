import { Component, OnInit } from '@angular/core';
import { characrap } from '../../services/apich.service';

@Component({
  selector: 'searchbar',
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss'
})
export class SearchbarComponent implements OnInit {

  constructor(public dat:characrap){}

  public listir: any[] = [];

  ngOnInit(): void {
    this.listir = this.dat.getCharacter;
  }
  s

  filtrado(textoRecibido: string){
      if(!textoRecibido){
      this.listir = [... this.listir]
            //preguntar por ... Spread_syntax [... this.variable]
      return;
    }
    const txtopeq = textoRecibido.toLowerCase();
    this.listir = this.listir.filter(pok =>
    ( pok.name.toLowerCase().includes(txtopeq)||
      pok.weight.toLowerCase().includes(txtopeq)||
      pok.types.toLowerCase().includes(txtopeq) )
    )
  }

  bus(event:any){
  const texto = event.target.value;

  }


}
