import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ExperienceService } from 'src/app/experiences/service/experience.service';
import { Valoracion } from '../models/valoracion';
import { ValoracionImpl } from '../models/valoracion-impl';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css'],
})
export class ValoracionComponent implements OnInit {
  // @Input() valoracion: Valoracion = new ValoracionImpl();
  valoraciones: Valoracion[] = [];

  faStar = faStar;

  constructor(
    private activateRoute: ActivatedRoute,
    private experienceService: ExperienceService
  ) {}

  ngOnInit(): void {
    this.experienceService
      .getValoracionesEntretenimientos(this.activateRoute.snapshot.params['id'])
      .subscribe((response) => {
        this.valoraciones =
          this.experienceService.extraerValoracionEntretenimiento(response);
      });
  }

}
