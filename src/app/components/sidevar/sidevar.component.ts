import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ImagesPage } from '../../pages/imagen/imagen.component';

@Component({
  selector: 'sidevar',
  imports: [RouterLink,RouterOutlet],
  standalone: true,
  templateUrl: './sidevar.component.html',
  styleUrl: './sidevar.component.scss'
})

export class SidevarComponent {

  @Input() estado= false;

  @Output() closeSidebar = new EventEmitter<void>();


  alternarSidebar(): void {
    this.estado = !this.estado;
  }

  cerrar() {
    this.closeSidebar.emit();
  }

}
