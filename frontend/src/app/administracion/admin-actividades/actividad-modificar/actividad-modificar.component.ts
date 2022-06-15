import { Component, Input, OnInit } from '@angular/core';
import { Actividad } from 'src/app/experiences/models/actividad';
import { ActividadImpl } from 'src/app/experiences/models/actividad-impl';
import { Coordinador } from 'src/app/experiences/models/coordinador';
import { ExperienceService } from 'src/app/experiences/service/experience.service';

@Component({
  selector: 'app-actividad-modificar',
  templateUrl: './actividad-modificar.component.html',
  styles: []
})
export class ActividadModificarComponent implements OnInit {
  @Input() actividad: Actividad = new ActividadImpl();
  @Input() coordinadores: Coordinador[] = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experienceService.getCoordinadores().subscribe((response => {
      this.coordinadores = this.experienceService.extraerCoordinadores(response);
    }));
  }

  modificarActividad(actividad: Actividad): void {
    this.experienceService.updateA(actividad).subscribe();
  }

}
