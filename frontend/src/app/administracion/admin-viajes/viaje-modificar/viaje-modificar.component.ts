import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  @Output() viajeModificar = new EventEmitter<Viaje>();

  constructor(
    private experienceService: ExperienceService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }

  modificarViaje(): void {
    this.viajeModificar.emit(this.viaje);
  }
}
