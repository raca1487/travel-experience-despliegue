import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private experienceService: ExperienceService, private router: Router) { }

  ngOnInit(): void {
  }

  modificarCoordinador(coordinadorModificado: Coordinador): void {
    this.experienceService.updateC(coordinadorModificado).subscribe((response) => {
      this.router.navigate(['/administracion/coordinadores']);
    });
  }

}
