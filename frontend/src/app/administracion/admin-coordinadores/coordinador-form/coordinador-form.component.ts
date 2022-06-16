import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coordinador } from 'src/app/experiences/models/coordinador';
import { CoordinadorImpl } from 'src/app/experiences/models/coordinador-impl';
import { ExperienceService } from 'src/app/experiences/service/experience.service';

@Component({
  selector: 'app-coordinador-form',
  templateUrl: './coordinador-form.component.html',
  styleUrls: ['./coordinador-form.component.css'],
})
export class CoordinadorFormComponent implements OnInit {
  coordinador: Coordinador = new CoordinadorImpl();

  constructor(
    private experienceService: ExperienceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  registrar(): void {
    this.experienceService.createC(this.coordinador).subscribe((response) => {
      this.router.navigate(['/administracion/coordinadores']);
    });
  }
}
