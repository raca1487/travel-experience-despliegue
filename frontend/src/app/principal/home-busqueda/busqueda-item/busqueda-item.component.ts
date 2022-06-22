import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Actividad } from 'src/app/experiences/models/actividad';
import { Entretenimiento } from 'src/app/experiences/models/entretenimiento';
import { EntretenimientoImpl } from 'src/app/experiences/models/entretenimiento-impl';
import { Viaje } from 'src/app/experiences/models/viaje';

@Component({
  selector: 'app-busqueda-item',
  templateUrl: './busqueda-item.component.html',
  styleUrls: ['./busqueda-item.component.css']
})
export class BusquedaItemComponent implements OnInit {
  @Input() entretenimiento: Entretenimiento = new EntretenimientoImpl();

  @Output() entretenimientoSeleccionado = new EventEmitter<Entretenimiento>();
  @Output() viajeSeleccionado = new EventEmitter<Viaje>();
  @Output() actividadSeleccionada = new EventEmitter<Actividad>();

  faEye = faEye;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegar() {
    this.navegarA();
    this.navegarV();
  }

  navegarV() {
    this.router.navigate([`/home/experiences/viaje/${this.entretenimiento.id}`]);
  }
  navegarA() {
    this.router.navigate([`/home/experiences/actividad/${this.entretenimiento.id}`]);
  }

}
