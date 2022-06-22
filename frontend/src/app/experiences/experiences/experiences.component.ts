import { Component, OnInit } from '@angular/core';
import { Actividad } from '../models/actividad';
import { ActividadImpl } from '../models/actividad-impl';
import { Coordinador } from '../models/coordinador';
import { CoordinadorImpl } from '../models/coordinador-impl';
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
  coordinadores: Coordinador[] = [];
  viajeVerDatos: Viaje = new ViajeImpl();
  actividadVerDatos: Actividad = new ActividadImpl();
  coordinadorVerDatos: Coordinador = new CoordinadorImpl();

  constructor(private experienceService: ExperienceService) {}

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
    this.experienceService
      .getCoordinadores()
      .subscribe(
        (response) =>
          (this.coordinadores =
            this.experienceService.extraerCoordinadores(response))
      );
  }

  verDatosV(viaje: Viaje): void {
    this.viajeVerDatos = viaje;
  }

  verDatosA(actividad: Actividad): void {
    this.actividadVerDatos = actividad;
  }

  verDatosC(coordinador: Coordinador): void {
    this.coordinadorVerDatos = coordinador;
  }

}
