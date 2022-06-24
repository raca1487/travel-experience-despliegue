import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coordinador } from 'src/app/experiences/models/coordinador';
import { CoordinadorImpl } from 'src/app/experiences/models/coordinador-impl';
import { ExperienceService } from 'src/app/experiences/service/experience.service';

@Component({
  selector: 'app-admin-coordinadores',
  templateUrl: './admin-coordinadores.component.html',
  styleUrls: ['./admin-coordinadores.component.css'],
})
export class AdminCoordinadoresComponent implements OnInit {
  coordinadores: Coordinador[] = [];
  // coordinador: Coordinador = new CoordinadorImpl();
  coordinadorVerDatos: Coordinador = new CoordinadorImpl();

  constructor(
    private experienceService: ExperienceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.experienceService
    .getCoordinadores()
    .subscribe(
      (response) =>
        (this.coordinadores =
          this.experienceService.extraerCoordinadores(response))
    );
  }

  verDatosC(coordinador: Coordinador): void {
    this.coordinadorVerDatos = coordinador;
  }

  // CRUD Coordinadores
  registrarCoordinador() {
    this.router.navigate(['/administracion/coordinador-form']);
  }

  onCoordinadorEliminar(coordinador: Coordinador): void {
    this.experienceService.deleteC(coordinador.idCoordinador).subscribe((response) => {
      this.router.navigate(['/administracion/coordinadores']);
      this.coordinadores = this.coordinadores.filter((c) => coordinador != c);
      location.reload();
    });
  }

  onCoordinadorModificar(coordinador: Coordinador): void {
    this.experienceService.updateC(coordinador).subscribe(response => {
      this.router.navigate(['/administracion/coordinadores']);
    });
  }
}
