import { Component, Input, OnInit } from '@angular/core';
import { Valoracion } from '../models/valoracion';
import { ValoracionImpl } from '../models/valoracion-impl';

@Component({
  selector: 'app-valoraciones',
  templateUrl: './valoraciones.component.html',
  styleUrls: ['./valoraciones.component.css']
})
export class ValoracionesComponent implements OnInit {
  @Input() valoracion: Valoracion = new ValoracionImpl();

  constructor() { }

  ngOnInit(): void {
  }

}
