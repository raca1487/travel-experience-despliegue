import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Valoracion } from 'src/app/valoraciones/models/valoracion';
import { ValoracionService } from 'src/app/valoraciones/service/valoracion.service';
import { environment } from 'src/environments/environment.prod';
import { Actividad } from '../../models/actividad';
import { ActividadImpl } from '../../models/actividad-impl';
import { Coordinador } from '../../models/coordinador';
import { CoordinadorImpl } from '../../models/coordinador-impl';
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
  url: string = "";
  id: string = ""

  constructor(
    private experienceService: ExperienceService,
    private valoracionService: ValoracionService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.cargarActividad();
    this.experienceService.getActividad(this.id).subscribe((response) => {
      this.actividad = this.experienceService.mapearActividad(response);
    });

    this.valoracionService.getValoraciones().subscribe((response) => {
      this.valoraciones = this.valoracionService.extraerValoraciones(response);
    });

    this.experienceService.getCoordinador(this.id).subscribe((response) => {
      this.coordinador = this.experienceService.mapearCoordinador(response);
    });
  }

  cargarActividad(): string {
    const idBarraNavegacion: string = this.activateRoute.snapshot.params['id'];
    //console.log(idBarraNavegacion);
    return idBarraNavegacion;
  }

  nuevaValoracion(): void {
    this.router.navigate([`/home/experiences/valoracion-form/actividad/${this.actividad.id}`]);
    this.url = `${environment.host}actividades/${this.id}`;
    console.log(this.url);
  }
}
