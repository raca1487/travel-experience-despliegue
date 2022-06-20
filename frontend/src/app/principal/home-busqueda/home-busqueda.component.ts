import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/experiences/models/actividad';
import { Entretenimiento } from 'src/app/experiences/models/entretenimiento';
import { EntretenimientoImpl } from 'src/app/experiences/models/entretenimiento-impl';
import { Viaje } from 'src/app/experiences/models/viaje';
import { ExperienceService } from 'src/app/experiences/service/experience.service';

@Component({
  selector: 'app-home-busqueda',
  templateUrl: './home-busqueda.component.html',
  styleUrls: ['./home-busqueda.component.css']
})
export class HomeBusquedaComponent implements OnInit {
  getPuntuacion: number = 0;
  viajes: Viaje[] = [];
  actividades: Actividad[] = [];
  entretenimientoVerDatos: Entretenimiento = new EntretenimientoImpl();

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
  }

  verDatos(entretenimiento: Entretenimiento) {
    this.entretenimientoVerDatos = entretenimiento;
  }

  setPuntuacion(puntuacion: number) {
    this.getPuntuacion = puntuacion;
  }

  filtrarPersonalizado(puntuacion: number) {
    this.experienceService.getPersonalizado(puntuacion).subscribe((response) => {
      this.viajes = this.experienceService.extraerViajes(response);
    });
    this.experienceService.getPersonalizado(puntuacion).subscribe((response) => {
      this.actividades = this.experienceService.extraerActividades(response);
    });
  }

}
