import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/experiences/models/actividad';
import { ActividadImpl } from 'src/app/experiences/models/actividad-impl';
import { Coordinador } from 'src/app/experiences/models/coordinador';
import { CoordinadorImpl } from 'src/app/experiences/models/coordinador-impl';
import { Viaje } from 'src/app/experiences/models/viaje';
import { ViajeImpl } from 'src/app/experiences/models/viaje-impl';
import { ExperienceService } from 'src/app/experiences/service/experience.service';

@Component({
  selector: 'app-admin-experiences',
  templateUrl: './admin-experiences.component.html',
  styleUrls: ['./admin-experiences.component.css']
})
export class AdminExperiencesComponent implements OnInit {
  viajes: Viaje[] = [];
  actividades: Actividad[] = [];
  actividad: Actividad = new ActividadImpl();
  coordinador: Coordinador = new CoordinadorImpl();
  viajeVerDatos: Viaje = new ViajeImpl();
  actividadVerDatos: Actividad = new ActividadImpl();
  coordinadorVerDatos: Coordinador = new CoordinadorImpl();

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
    // this.experienceService
    //   .getCoordinador(this.actividadVerDatos.id)
    //   .subscribe(
    //     (response) =>
    //       (this.coordinador =
    //         this.experienceService.mapearCoordinador(response))
    //   );
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

  // CRUD Viajes
  registrarViaje() {
    this.router.navigate(['/administracion/viaje-form']);
  }

  onViajeEliminar(viaje: Viaje): void {
    this.experienceService.deleteV(viaje.id).subscribe((response) => {
      this.router.navigate(['/administracion/experiences']);
      this.viajes = this.viajes.filter((v) => viaje != v);
      location.reload();
    });
  }

  onViajeEditar(viaje: Viaje): void {
    this.experienceService.updateV(viaje).subscribe(response => {
      this.router.navigate(['/administracion/experiences']);
    });
  }

  // CRUD Actividades
  registrarActividad() {
    this.router.navigate(['/administracion/actividad-form']);
  }

  onActividadEliminar(actividad: Actividad): void {
    this.experienceService.deleteA(actividad.id).subscribe((response) => {
      this.router.navigate(['/administracion/experiences']);
      this.actividades = this.actividades.filter((a) => actividad != a);
      location.reload();
    });
  }

  // onActividadEditar(actividad: Actividad): void {
  //   this.experienceService.updateA(actividad).subscribe(response => {
  //     this.router.navigate(['/administracion/experiences']);
  //   });
  // }

}
