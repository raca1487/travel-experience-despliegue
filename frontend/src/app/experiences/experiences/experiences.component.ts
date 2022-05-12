import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from '../models/viaje';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  viajes: Viaje[] = [];
  viajeVerDatos!: Viaje;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verDatos(viaje: Viaje): void {
    this.viajeVerDatos = viaje;
  }

}
