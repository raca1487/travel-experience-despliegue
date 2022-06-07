import { Component, Input, OnInit } from '@angular/core';
import { Viaje } from '../../models/viaje';
import { ViajeImpl } from '../../models/viaje-impl';
import { ExperienceService } from '../../service/experience.service';

@Component({
  selector: 'app-viaje-modificar',
  templateUrl: './viaje-modificar.component.html',
  styleUrls: ['./viaje-modificar.component.css'],
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
