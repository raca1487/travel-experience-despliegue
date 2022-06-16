import { Component, Input, OnInit } from '@angular/core';
import { Coordinador } from 'src/app/experiences/models/coordinador';
import { CoordinadorImpl } from 'src/app/experiences/models/coordinador-impl';
import { ExperienceService } from 'src/app/experiences/service/experience.service';

@Component({
  selector: 'app-coordinador-modificar',
  templateUrl: './coordinador-modificar.component.html',
  styles: []
})
export class CoordinadorModificarComponent implements OnInit {
  @Input() coordinador: Coordinador = new CoordinadorImpl();

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
  }

  modificarCoordinador(coordinador: Coordinador): void {
    this.experienceService.updateC(coordinador).subscribe();
  }

}
