import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from '../models/viaje';
import { ViajeImpl } from '../models/viaje-impl';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  viajes: Viaje[] = [  // PARA PRUEBAS SIN CONEXION CON LA API
    {
      "id": 1,
      "nombre": "Jerez y bodegas",
      "descripcion": "Recorre la ciudad del vino y visita las bodegas más famosas del planeta",
      "duracionViaje": 5,
      "fechaSalida": "01/06/2022",
      "precio": 300,
      "valoraciones": []
    },
    {
      "id": 2,
      "nombre": "Toledo",
      "descripcion": "Recorre la ciudad y sus entrañas",
      "duracionViaje": 1,
      "fechaSalida": "25/05/2022",
      "precio": 150,
      "valoraciones": []
    },
    {
      "id": 3,
      "nombre": "Gran Canaria",
      "descripcion": "Playas, sol y fiesta",
      "duracionViaje": 3,
      "fechaSalida": "10/06/2022",
      "precio": 500,
      "valoraciones": []
    }
  ];
  viajeVerDatos: Viaje = new ViajeImpl();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verDatos(viaje: Viaje): void {
    this.viajeVerDatos = viaje;
    this.router.navigate([`/experiences/viaje/${viaje.id}`]);
  }

}
