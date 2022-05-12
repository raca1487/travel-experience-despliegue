import { Component, Input, OnInit } from '@angular/core';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import { Valoracion } from '../../models/valoracion';
import { Viaje } from '../../models/viaje';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent implements OnInit {
  @Input() viaje!: Viaje;
  faPlaneUp = faPlaneUp;

  valoraciones: Valoracion[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
