import { Component, inject, signal } from '@angular/core';
import { PokesignService } from '../../services/pokesign.service';

@Component({
  selector: 'senal',
  imports: [],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.scss'
})
export class PruebaComponent {

public total = inject(PokesignService);

totalteam = this.total.conteo;


}
