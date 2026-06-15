import { Component, OnInit, inject } from '@angular/core';
import { characrap } from '../../services/apich.service';

@Component({
  selector: 'info-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class Infocard implements OnInit{

    private marvelApi = inject(characrap);

    public lista: any[] = [];

  ngOnInit(): void {
    this.cargach();
  }

  private async cargach(): Promise<void>{
    for (let cha = 1; cha <= 70; cha++) {
      const character = await this.marvelApi.getCharacter(cha);

      this.lista.push(character);
    }
  }

}
