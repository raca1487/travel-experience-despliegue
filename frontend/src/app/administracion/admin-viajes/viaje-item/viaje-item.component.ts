import { Component, Input, OnInit } from '@angular/core';
import { Viaje } from 'src/app/experiences/models/viaje';
import { ViajeImpl } from 'src/app/experiences/models/viaje-impl';

@Component({
  selector: 'app-viaje-item',
  templateUrl: './viaje-item.component.html',
  styles: []
})
export class ViajeItemComponent implements OnInit {
  @Input() viaje: Viaje = new ViajeImpl();

  constructor() { }

  ngOnInit(): void {
  }

}
