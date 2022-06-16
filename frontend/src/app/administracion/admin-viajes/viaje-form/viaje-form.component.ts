import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from 'src/app/experiences/models/viaje';
import { ViajeImpl } from 'src/app/experiences/models/viaje-impl';
import { ExperienceService } from 'src/app/experiences/service/experience.service';

@Component({
  selector: 'app-viaje-form',
  templateUrl: './viaje-form.component.html',
  styleUrls: ['./viaje-form.component.css']
})
export class ViajeFormComponent implements OnInit {
  viaje: Viaje = new ViajeImpl();

  constructor(
    private experienceService: ExperienceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  registrar(): void {
    this.experienceService.createV(this.viaje).subscribe((response) => {
      this.router.navigate(['/administracion/experiences']);
    });
  }

}
