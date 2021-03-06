import { Component, Input, OnInit } from '@angular/core';
import { Actividad } from 'src/app/experiences/models/actividad';
import { ActividadImpl } from 'src/app/experiences/models/actividad-impl';
import { Coordinador } from 'src/app/experiences/models/coordinador';
import { CoordinadorImpl } from 'src/app/experiences/models/coordinador-impl';
import { ExperienceService } from 'src/app/experiences/service/experience.service';

@Component({
  selector: 'app-actividad-item',
  templateUrl: './actividad-item.component.html',
  styles: [],
})
export class ActividadItemComponent implements OnInit {
  @Input() actividad: Actividad = new ActividadImpl();
  coordinador: Coordinador = new CoordinadorImpl();

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    setTimeout(() => {
      // console.log(this.actividad.coordinador);
      this.experienceService
        .getCoordinadorUrl(this.actividad.coordinador)
        .subscribe((response) => {
          this.coordinador = this.experienceService.mapearCoordinador(response);
          // console.log(this.coordinador);
        });
    }, 5000);
  }

  actualizar() {
    this.ngOnInit();
  }
}
