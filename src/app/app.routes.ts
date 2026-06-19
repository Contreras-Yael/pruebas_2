import { Routes } from '@angular/router';
import { Infocard } from './components/card/card.component';
import { ImagesPage } from './pages/imagen/imagen.component';
import { LandingPage } from './pages/landing-page/landing-page.component';
import { EquipoPoke } from './pages/equipo/equipo.component';
import { LoaderComponent } from './components/loader/loader.component';

export const routes: Routes = [
  {path:"", component:Infocard},
  {path:"Inicio", component:Infocard},
  {path:"Imagen", component:ImagesPage},
  {path:"Formulario", component:LandingPage},
  {path:"Equipo", component:EquipoPoke},
  {path: "**", component:LoaderComponent},
];
