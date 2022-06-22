import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from '../models/viaje';
import { ViajeImpl } from '../models/viaje-impl';
import { ExperienceService } from '../service/experience.service';

@Component({
  selector: 'app-experiences-viajes',
  templateUrl: './experiences-viajes.component.html',
  styleUrls: ['./experiences-viajes.component.css'],
})
export class ExperiencesViajesComponent implements OnInit {
  viajes: Viaje[] = [];
  viajeVerDatos: Viaje = new ViajeImpl();

  constructor(
    private experienceService: ExperienceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.experienceService
      .getViajes()
      .subscribe(
        (response) =>
          (this.viajes = this.experienceService.extraerViajes(response))
      );
  }

  verDatosV(viaje: Viaje): void {
    this.viajeVerDatos = viaje;
    this.router.navigate([`/home/experiences/viaje/${viaje.id}`]);
  }
}
