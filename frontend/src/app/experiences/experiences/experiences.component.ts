import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from '../models/viaje';
import { ViajeImpl } from '../models/viaje-impl';
import { ExperienceService } from '../service/experience.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  viajes: Viaje[] = [];
  viajeVerDatos: Viaje = new ViajeImpl();

  constructor(private experienceService: ExperienceService, private router: Router) { }

  ngOnInit(): void {
    this.experienceService.getViajes().subscribe((response) => this.viajes = this.experienceService.extraerViajes(response));
  }

  verDatos(viaje: Viaje): void {
    this.viajeVerDatos = viaje;
    this.router.navigate([`experiences/viaje/${viaje.viajeId}`]);
  }

  registrarViaje() {
    this.router.navigate(['experiences/viaje-form']);
  }

}
