import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividad } from '../models/actividad';
import { ActividadImpl } from '../models/actividad-impl';
import { Viaje } from '../models/viaje';
import { ViajeImpl } from '../models/viaje-impl';
import { ExperienceService } from '../service/experience.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
})
export class ExperiencesComponent implements OnInit {
  viajes: Viaje[] = [];
  actividades: Actividad[] = [];
  viajeVerDatos: Viaje = new ViajeImpl();
  actividadVerDatos: Actividad = new ActividadImpl();

  constructor(
    private experienceService: ExperienceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.experienceService
      .getViajes()
      .subscribe(
        (response) =>
          (this.viajes = this.experienceService.extraerViajes(response))
      );
    this.experienceService
      .getActividades()
      .subscribe(
        (response) =>
          (this.actividades =
            this.experienceService.extraerActividades(response))
      );
  }

  verDatosV(viaje: Viaje): void {
    this.viajeVerDatos = viaje;
    this.router.navigate([`experiences/viaje/${viaje.id}`]);
  }

  verDatosA(actividad: Actividad): void {
    this.actividadVerDatos = actividad;
    this.router.navigate([`experiences/actividad/${actividad.id}`]);
  }

  registrarViaje() {
    this.router.navigate(['experiences/viaje-form']);
  }

  registrarActividad() {
    this.router.navigate(['experiences/actividad-form']);
  }
}
