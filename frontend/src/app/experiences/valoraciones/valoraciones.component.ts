import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Valoracion } from '../models/valoracion';
import { ValoracionImpl } from '../models/valoracion-impl';

@Component({
  selector: 'app-valoraciones',
  templateUrl: './valoraciones.component.html',
  styleUrls: ['./valoraciones.component.css'],
})
export class ValoracionesComponent implements OnInit {
  //@Input() valoracion: Valoracion = new ValoracionImpl();

  id: number = 0;
  valoracion: Valoracion = new ValoracionImpl();

  valoraciones: Valoracion[] = [
    {
      titulo: 'Valoración 1',
      comentario: 'Eso es un primer comentario',
      puntuacion: 7,
      idViaje: 1
    },
    {
      titulo: 'Valoración 1',
      comentario: 'Eso es un primer comentario de otro viaje',
      puntuacion: 5,
      idViaje: 2
    },
    {
      titulo: 'Valoración 1',
      comentario: 'Eso es otro comentario',
      puntuacion: 8,
      idViaje: 3
    }
  ];

  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.getValoracion();
  }

  getValoracion(): void {
    for (let vl of this.valoraciones) {
      if (vl.idViaje == this.id) {
        this.valoracion.titulo = vl.titulo;
        this.valoracion.comentario = vl.comentario;
        this.valoracion.puntuacion = vl.puntuacion;
      }
    }
  }
}
