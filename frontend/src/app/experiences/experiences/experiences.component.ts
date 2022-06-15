import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  static logged: boolean = false;

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
    this.router.navigate([`/home/experiences/viaje/${viaje.id}`]);
  }

  verDatosA(actividad: Actividad): void {
    this.actividadVerDatos = actividad;
    this.router.navigate([`/home/experiences/actividad/${actividad.id}`]);
  }

  verDatosC(coordinador: Coordinador): void {
    this.coordinadorVerDatos = coordinador;
  }

  // CRUD Viajes
  registrarViaje() {
    this.router.navigate(['/home/experiences/viaje-form']);
  }

  onViajeEliminar(viaje: Viaje): void {
    this.experienceService.deleteV(viaje.id).subscribe((response) => {
      this.router.navigate(['/home/experiences']);
      this.viajes = this.viajes.filter((v) => viaje != v);
      location.reload();
    });
  }

  onViajeEditar(viaje: Viaje): void {
    //let url = `experiences/viaje-form/${viaje.id}`;
    //location.reload();
    //this.router.navigate([url]);
  }

  // CRUD Actividades
  registrarActividad() {
    this.router.navigate(['/home/experiences/actividad-form']);
  }

  onActividadEliminar(actividad: Actividad): void {
    this.experienceService.deleteA(actividad.id).subscribe((response) => {
      this.router.navigate(['/home/experiences']);
      this.actividades = this.actividades.filter((a) => actividad != a);
      location.reload();
    });
  }

  onActividadEditar(actividad: Actividad): void {
    //let url = `experiences/actividad-form/${actividad.id}`;
    //location.reload();
    //this.router.navigate([url]);
  }

  getLogged(): boolean {
    return ExperiencesComponent.logged;
  }
}
