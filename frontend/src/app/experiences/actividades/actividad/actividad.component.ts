import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Valoracion } from 'src/app/valoraciones/models/valoracion';
import { ValoracionService } from 'src/app/valoraciones/service/valoracion.service';
import { Actividad } from '../../models/actividad';
import { ActividadImpl } from '../../models/actividad-impl';
import { ExperienceService } from '../../service/experience.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css'],
})
export class ActividadComponent implements OnInit {
  @Input() actividad: Actividad = new ActividadImpl();
  valoraciones: Valoracion[] = [];

  constructor(
    private experienceService: ExperienceService,
    private valoracionService: ValoracionService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id: string = this.cargarActividad();
    this.experienceService.getActividad(id).subscribe((response) => {
      this.actividad = this.experienceService.mapearActividad(response);
    });
    this.valoracionService
      .getValoraciones()
      .subscribe(
        (response) =>
          (this.valoraciones =
            this.valoracionService.extraerValoraciones(response))
      );
  }

  cargarActividad(): string {
    const idBarraNavegacion: string = this.activateRoute.snapshot.params['id'];
    //console.log(idBarraNavegacion);
    return idBarraNavegacion;
  }

  nuevaValoracion(): void {
    this.router.navigate([`experiences/actividad/${this.actividad.id}/valoracion-form`]);
  }
}
