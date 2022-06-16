import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExperienceService } from 'src/app/experiences/service/experience.service';
import { Valoracion } from '../models/valoracion';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css'],
})
export class ValoracionComponent implements OnInit {
  // @Input() valoracion: Valoracion = new ValoracionImpl();
  valoraciones: Valoracion[] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private experienceService: ExperienceService
  ) {}

  ngOnInit(): void {
    this.experienceService.getValoracionesIdViaje(this.activateRoute.snapshot.params['id']).subscribe((response) =>
          this.valoraciones = this.experienceService.extraerValoracionEntretenimiento(response)
      );

      this.experienceService.getValoracionesIdActividad(this.activateRoute.snapshot.params['id']).subscribe((response) =>
        this.valoraciones = this.experienceService.extraerValoracionEntretenimiento(response)
      );

  }
}
