import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Viaje } from '../../models/viaje';
import { ViajeImpl } from '../../models/viaje-impl';

@Component({
  selector: 'app-viaje-item',
  templateUrl: './viaje-item.component.html',
  styleUrls: ['./viaje-item.component.css']
})
export class ViajeItemComponent implements OnInit {
  @Input() viaje: Viaje = new ViajeImpl();

  constructor() { }

  ngOnInit(): void {
  }

}
