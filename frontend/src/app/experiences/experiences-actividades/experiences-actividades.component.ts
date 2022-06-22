import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividad } from '../models/actividad';
import { ActividadImpl } from '../models/actividad-impl';
import { ExperienceService } from '../service/experience.service';

@Component({
  selector: 'app-experiences-actividades',
  templateUrl: './experiences-actividades.component.html',
  styleUrls: ['./experiences-actividades.component.css'],
})
export class ExperiencesActividadesComponent implements OnInit {
  actividades: Actividad[] = [];
  actividadVerDatos: Actividad = new ActividadImpl();

  constructor(
    private experienceService: ExperienceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.experienceService
      .getActividades()
      .subscribe(
        (response) =>
          (this.actividades =
            this.experienceService.extraerActividades(response))
      );
  }

  verDatosA(actividad: Actividad): void {
    this.actividadVerDatos = actividad;
    this.router.navigate([`/home/experiences/actividad/${actividad.id}`]);
  }
}
