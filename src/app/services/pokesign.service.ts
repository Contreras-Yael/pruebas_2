import { computed, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokesignService {

  private listpo = signal <any[]>([]);

  conteo: Signal<number> = computed(() => this.listpo().length);

  addpok(pokemon: any){
    if(this.listpo().length < 6){
      this.listpo.update(teampo => [...teampo, pokemon]);
    }else{
      alert("Equipo completo");
    }

  }


  constructor() { }
}
