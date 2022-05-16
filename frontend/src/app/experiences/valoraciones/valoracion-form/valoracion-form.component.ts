import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Valoracion } from '../../models/valoracion';
import { ValoracionImpl } from '../../models/valoracion-impl';
import { ValoracionService } from '../../service/valoracion.service';

@Component({
  selector: 'app-valoracion-form',
  templateUrl: './valoracion-form.component.html',
  styleUrls: ['./valoracion-form.component.css']
})
export class ValoracionFormComponent implements OnInit {
  valoracion: Valoracion = new ValoracionImpl();

  constructor(private router: Router, private valoracionService: ValoracionService) { }

  ngOnInit(): void {
  }

  public registrar(): void {
    this.valoracionService.registrar(this.valoracion);
  }

}
