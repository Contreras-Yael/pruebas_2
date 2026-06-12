import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidevar',
  standalone: true,
  templateUrl: './sidevar.component.html',
  styleUrl: './sidevar.component.scss'
})

export class SidevarComponent {

  @Input() IsOpen= false;

  @Output() closeSidebar = new EventEmitter<void>();

  cerrar() {
    this.closeSidebar.emit();
  }

}
