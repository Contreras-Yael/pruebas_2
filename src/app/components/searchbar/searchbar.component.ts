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

  private listaseg: any[] = [];

  public listir: any[] = [];

  ngOnInit(): void {
    this.cargato();
  }

  async cargato(){

    const data = await this.dat.getCharacter(1);

    this.listir =

  }

  // FUNCIÓN 1: Solo se encarga de ir a internet (Ajax) una sola vez
  async cargarTodosLosPersonajes() {
    try {
      // Pedimos los datos al servicio (Cambié el ID por una función ideal que traiga la lista)
      const data = await this.dat.getCharacter(1);

      // Si la API te devuelve una lista, la guardamos en ambas variables
      this.listaOriginal = Array.isArray(data) ? data : [data];
      this.listir = [...this.listaOriginal];
    } catch (error) {
      console.error('Error de red al descargar personajes:', error);
    }
  }


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
