import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Viaje } from '../models/viaje';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {
  @Input() viaje!: Viaje;
  @Output() viajeSeleccionado = new EventEmitter<Viaje>();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarViaje(viaje: Viaje): void {
    this.viajeSeleccionado.emit(viaje);
  }

}
