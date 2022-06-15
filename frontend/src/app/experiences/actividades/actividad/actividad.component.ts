import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ValoracionService } from 'src/app/valoraciones/service/valoracion.service';
import { Actividad } from '../../models/actividad';
import { ActividadImpl } from '../../models/actividad-impl';
import { Coordinador } from '../../models/coordinador';
import { CoordinadorImpl } from '../../models/coordinador-impl';
import { Valoracion } from '../../models/valoracion';
import { ExperienceService } from '../../service/experience.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css'],
})
export class ActividadComponent implements OnInit {
  @Input() actividad: Actividad = new ActividadImpl();
  @Input() coordinador: Coordinador = new CoordinadorImpl();
  valoraciones: Valoracion[] = [];

  constructor(
    private experienceService: ExperienceService,
    private valoracionService: ValoracionService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id: string = this.cargarActividad();
    this.experienceService.getActividad(id).subscribe((response) => {
      this.actividad = this.experienceService.mapearActividad(response);
    });

    this.valoracionService.getValoraciones().subscribe((response) => {
      this.valoraciones = this.valoracionService.extraerValoraciones(response);
    });

    this.experienceService.getCoordinador(id).subscribe((response) => {
      this.coordinador = this.experienceService.mapearCoordinador(response);
    });
  }

  cargarActividad(): string {
    const idBarraNavegacion: string = this.activateRoute.snapshot.params['id'];
    //console.log(idBarraNavegacion);
    return idBarraNavegacion;
  }

  // cargarCoordinador(actividad: Actividad): string {
  //   let urlCoordinador: string = actividad.coordinador;
  //   let idCoordinador: string = this.experienceService.getId(urlCoordinador);
  //   console.log(idCoordinador);
  //   return idCoordinador;
  // }

  nuevaValoracion(): void {
    this.router.navigate([`/home/experiences/actividad/${this.actividad.id}/valoracion-form`]);
  }
}
