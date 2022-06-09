import { Component, Input, OnInit } from '@angular/core';
import { Actividad } from '../../models/actividad';
import { ActividadImpl } from '../../models/actividad-impl';
import { Coordinador } from '../../models/coordinador';
import { ExperienceService } from '../../service/experience.service';

@Component({
  selector: 'app-actividad-modificar',
  templateUrl: './actividad-modificar.component.html',
  styleUrls: ['./actividad-modificar.component.css']
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
