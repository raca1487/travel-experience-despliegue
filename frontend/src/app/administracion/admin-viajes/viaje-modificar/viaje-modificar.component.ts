import { Component, Input, OnInit } from '@angular/core';
import { Viaje } from 'src/app/experiences/models/viaje';
import { ViajeImpl } from 'src/app/experiences/models/viaje-impl';
import { ExperienceService } from 'src/app/experiences/service/experience.service';

@Component({
  selector: 'app-viaje-modificar',
  templateUrl: './viaje-modificar.component.html',
  styles: []
})
export class ViajeModificarComponent implements OnInit {
  @Input() viaje: Viaje = new ViajeImpl();

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
  }

  modificarViaje(viaje: Viaje): void {
    this.experienceService.updateV(viaje).subscribe();
  }

}
