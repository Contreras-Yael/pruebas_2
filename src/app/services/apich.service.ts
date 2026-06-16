import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class characrap {
  constructor() {
  }

  private http = inject(HttpClient);

  private urlBase = "https://pokeapi.co/api/v2/pokemon";
  // private key = "2f648a02029473f5456a17a6cf18f0fb";

  public getCharacter = (characterId: number): Promise<any> =>{
      const data = `${this.urlBase}/${characterId}`;

       return firstValueFrom(this.http.get<any>(data))
  }

  private prueba(){
    console.log("Entro a la funcion");
  }
}
