import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividad } from '../../models/actividad';
import { ActividadImpl } from '../../models/actividad-impl';
import { ExperienceService } from '../../service/experience.service';

@Component({
  selector: 'app-actividad-form',
  templateUrl: './actividad-form.component.html',
  styleUrls: ['./actividad-form.component.css']
})
export class ActividadFormComponent implements OnInit {
  actividad: Actividad = new ActividadImpl();

  constructor(private experienceService: ExperienceService, private router: Router) { }

  ngOnInit(): void {
  }

  registrar(): void {
    this.experienceService.createA(this.actividad).subscribe((response) => {
      this.router.navigate(['/experiences']);
    });
  }

}
