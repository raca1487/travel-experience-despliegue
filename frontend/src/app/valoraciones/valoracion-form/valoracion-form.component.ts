import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad } from 'src/app/experiences/models/actividad';
import { ActividadImpl } from 'src/app/experiences/models/actividad-impl';
import { Viaje } from 'src/app/experiences/models/viaje';
import { ViajeImpl } from 'src/app/experiences/models/viaje-impl';
import { ExperienceService } from 'src/app/experiences/service/experience.service';
import { Valoracion } from '../models/valoracion';
import { ValoracionImpl } from '../models/valoracion-impl';
import { ValoracionService } from '../service/valoracion.service';

@Component({
  selector: 'app-valoracion-form',
  templateUrl: './valoracion-form.component.html',
  styleUrls: ['./valoracion-form.component.css'],
})
export class ValoracionFormComponent implements OnInit {
  valoracion: Valoracion = new ValoracionImpl();

  constructor(
    private valoracionService: ValoracionService,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  registrar(): void {
    this.valoracionService.create(this.valoracion).subscribe((response) => {
      this.router.navigate(['/home/experiences']);
    });
  }
}
