import { Component, Input, OnInit } from '@angular/core';
import { Actividad } from 'src/app/experiences/models/actividad';
import { ActividadImpl } from 'src/app/experiences/models/actividad-impl';
import { Coordinador } from 'src/app/experiences/models/coordinador';
import { CoordinadorImpl } from 'src/app/experiences/models/coordinador-impl';

@Component({
  selector: 'app-actividad-item',
  templateUrl: './actividad-item.component.html',
  styles: []
})
export class ActividadItemComponent implements OnInit {
  @Input() actividad: Actividad = new ActividadImpl();
  @Input() coordinador: Coordinador = new CoordinadorImpl();

  constructor() { }

  ngOnInit(): void {
  }

}
