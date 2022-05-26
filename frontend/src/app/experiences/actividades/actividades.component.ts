import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actividad } from '../models/actividad';
import { ActividadImpl } from '../models/actividad-impl';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  @Input() actividad: Actividad = new ActividadImpl();
  @Output() actividadSeleccionada = new EventEmitter<Actividad>();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarActividad(actividad: Actividad): void {
    this.actividadSeleccionada.emit(actividad);
  }

}
