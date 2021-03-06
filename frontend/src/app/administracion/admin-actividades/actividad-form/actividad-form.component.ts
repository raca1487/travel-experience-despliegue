import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/experiences/models/actividad';
import { ActividadImpl } from 'src/app/experiences/models/actividad-impl';
import { Coordinador } from 'src/app/experiences/models/coordinador';
import { ExperienceService } from 'src/app/experiences/service/experience.service';

@Component({
  selector: 'app-actividad-form',
  templateUrl: './actividad-form.component.html',
  styleUrls: ['./actividad-form.component.css']
})
export class ActividadFormComponent implements OnInit {
  actividad: Actividad = new ActividadImpl();
  coordinadores: Coordinador[] = [];

  constructor(
    private experienceService: ExperienceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.experienceService.getCoordinadores().subscribe((response => {
      this.coordinadores = this.experienceService.extraerCoordinadores(response);
    }));
  }

  registrar(): void {
    this.experienceService.createA(this.actividad).subscribe((response) => {
      this.router.navigate(['/administracion/experiences']);
    });
  }

}
