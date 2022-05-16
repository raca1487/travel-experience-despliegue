import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import { Valoracion } from '../../models/valoracion';
import { ValoracionImpl } from '../../models/valoracion-impl';
import { Viaje } from '../../models/viaje';
import { ViajeImpl } from '../../models/viaje-impl';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent implements OnInit {
  //@Input() viaje: Viaje = new ViajeImpl();
  faPlaneUp = faPlaneUp;

  id: number = 0;
  viaje: Viaje = new ViajeImpl();
  valoracion: Valoracion = new ValoracionImpl();

  viajes: Viaje[] = [  // PARA PRUEBAS SIN COEXION CON LA API
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

  /*valoraciones: Valoracion[] = [
    {
      "titulo": "Valoración 1",
      "comentario": "Eso es un primer comentario",
      "puntuacion": 6
    }
  ];*/
  //valoracionVerDatos: Valoracion = new ValoracionImpl();

  constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.getViaje();
  }

  getViaje(): void {
    for (let vj of this.viajes) {
      if (vj.id == this.id) {
        this.viaje.nombre = vj.nombre;
        this.viaje.descripcion = vj.descripcion;
        this.viaje.duracionViaje = vj.duracionViaje;
        this.viaje.fechaSalida = vj.fechaSalida;
        this.viaje.precio = vj.precio;
        this.viaje.valoraciones.push(this.valoracion);
      }
    }
  }

  getValoracion(): void {
    for (let vj of this.viajes) {
      for (let vl of vj.valoraciones) {
        this.valoracion.titulo = vl.titulo;
        this.valoracion.comentario = vl.comentario;
        this.valoracion.puntuacion = vl.puntuacion;
      }
    }
  }

  nuevaValoracion(): void {
    this.router.navigate([`experiences/viaje/${this.id}/formulario`])
  }

}
