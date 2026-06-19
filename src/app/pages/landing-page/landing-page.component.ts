import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'Landingpage',
  imports: [FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPage {

  nombre = '';
  email = '';
  edad = 0;
  password = '';

  Subir(){
    console.log(this.nombre, this.password, this.email);
  }


}
