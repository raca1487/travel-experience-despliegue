import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from '../models/viaje';
import { ViajeImpl } from '../models/viaje-impl';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {
  @Input() viaje: Viaje = new ViajeImpl();
  @Output() viajeSeleccionado = new EventEmitter<Viaje>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  seleccionarViaje(viaje: Viaje): void {
    this.router.navigate([`/home/experiences/viaje/${viaje.id}`]);
  }

}
