import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from '../../models/viaje';
import { ViajeImpl } from '../../models/viaje-impl';
import { ExperienceService } from '../../service/experience.service';

@Component({
  selector: 'app-viaje-form',
  templateUrl: './viaje-form.component.html',
  styleUrls: ['./viaje-form.component.css']
})
export class ViajeFormComponent implements OnInit {
  viaje: Viaje = new ViajeImpl();

  constructor(private experienceService: ExperienceService, private router: Router) { }

  ngOnInit(): void {
  }

  registrar(): void {
    this.experienceService.createV(this.viaje).subscribe((response) => {
      this.router.navigate(['/experiences']);
    });
  }

}
