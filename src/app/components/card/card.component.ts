import { Component, OnInit, inject, Input } from '@angular/core';
import { characrap } from '../../services/apich.service';
import { PokesignService } from '../../services/pokesign.service';

@Component({
  selector: 'info-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class Infocard implements OnInit{

    public cont = inject(PokesignService);

    private marvelApi = inject(characrap);

    public lista: any[] = [];

    @Input() list: any[] = [];

  ngOnInit(): void {
    this.cargach();
  }

  private async cargach(): Promise<void>{
    for (let cha = 1; cha <= 70; cha++) {
      const character = await this.marvelApi.getCharacter(cha);

      this.lista.push(character);
    }
  }

  selecc(){
    this.cont.addpok(this.list);
  }

}
