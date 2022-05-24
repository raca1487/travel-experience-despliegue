import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';
import { Valoracion } from '../../models/valoracion';
import { Viaje } from '../../models/viaje';
import { ViajeImpl } from '../../models/viaje-impl';
import { ExperienceService } from '../../service/experience.service';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent implements OnInit {
  @Input() viaje: Viaje = new ViajeImpl();
  faPlaneUp = faPlaneUp;

  valoraciones: Valoracion[] = [];

  constructor(private experienceService: ExperienceService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarViaje();
    this.experienceService.getViaje(id).subscribe((response) => {
      this.viaje = this.experienceService.mapearViaje(response);
    });
  }

  cargarViaje(): string {
    const idBarraNavegacion: string = this.activateRoute.snapshot.params['id'];
    //console.log(idBarraNavegacion);
    return idBarraNavegacion;
  }

  nuevaValoracion(): void {
    this.router.navigate([`experiences/viaje/${this.viaje.viajeId}/formulario`]);
  }

}
