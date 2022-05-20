import { Component, OnInit } from '@angular/core';
import { Viaje } from '../../models/viaje';
import { ViajeImpl } from '../../models/viaje-impl';

@Component({
  selector: 'app-viaje-form',
  templateUrl: './viaje-form.component.html',
  styleUrls: ['./viaje-form.component.css']
})
export class ViajeFormComponent implements OnInit {
  viaje: Viaje = new ViajeImpl();

  constructor() { }

  ngOnInit(): void {
  }

  registrar(): void {
    /*this.valoracionService.create(this.valoracion).subscribe((response) => {
      console.log('Se ha registrado una valoración');
    })*/;
  }

}
