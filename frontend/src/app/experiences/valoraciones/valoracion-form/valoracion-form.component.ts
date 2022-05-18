import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Valoracion } from '../../models/valoracion';
import { ValoracionImpl } from '../../models/valoracion-impl';
import { Viaje } from '../../models/viaje';
import { ViajeImpl } from '../../models/viaje-impl';
import { ValoracionService } from '../../service/valoracion.service';

@Component({
  selector: 'app-valoracion-form',
  templateUrl: './valoracion-form.component.html',
  styleUrls: ['./valoracion-form.component.css']
})
export class ValoracionFormComponent implements OnInit {
  @Input() viaje: Viaje = new ViajeImpl();
  valoracion: Valoracion = new ValoracionImpl();
  id: string = "";

  constructor(private activateRoute: ActivatedRoute, private router: Router, private valoracionService: ValoracionService) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
  }

  registrar(): void {
    /*this.valoracionService.create(this.valoracion).subscribe((response) => {
      console.log('Se ha registrado una valoración');
    })*/;
  }

}
