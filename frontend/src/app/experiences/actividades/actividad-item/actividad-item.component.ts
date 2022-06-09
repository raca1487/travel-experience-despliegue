import { Component, Input, OnInit } from '@angular/core';
import { Actividad } from '../../models/actividad';
import { ActividadImpl } from '../../models/actividad-impl';
import { Coordinador } from '../../models/coordinador';
import { CoordinadorImpl } from '../../models/coordinador-impl';

@Component({
  selector: 'app-actividad-item',
  templateUrl: './actividad-item.component.html',
  styleUrls: ['./actividad-item.component.css']
})
export class ActividadItemComponent implements OnInit {
  @Input() actividad: Actividad = new ActividadImpl();
  @Input() coordinador: Coordinador = new CoordinadorImpl();

  constructor() { }

  ngOnInit(): void {
  }

}
