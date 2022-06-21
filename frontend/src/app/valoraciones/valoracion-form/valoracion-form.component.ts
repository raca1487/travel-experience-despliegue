import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Valoracion } from '../models/valoracion';
import { ValoracionImpl } from '../models/valoracion-impl';
import { ValoracionService } from '../service/valoracion.service';

@Component({
  selector: 'app-valoracion-form',
  templateUrl: './valoracion-form.component.html',
  styleUrls: ['./valoracion-form.component.css'],
})
export class ValoracionFormComponent implements OnInit {
  valoracion: Valoracion = new ValoracionImpl();
  id: string = '';
  host: string = environment.host;
  fechaActual: Date = new Date();

  constructor(
    private valoracionService: ValoracionService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    console.log('id = ', this.id);
    console.log('fecha = ', this.cambiarFormatoFecha(this.fechaActual));
  }

  registrar(): void {
    this.valoracion.entretenimiento = `${this.host}entretenimientos/${this.id}`;
    this.valoracion.fechaPublicacion = this.cambiarFormatoFecha(this.fechaActual);
    this.valoracionService.create(this.valoracion).subscribe((response) => {
      this.router.navigate(['/home/experiences']);
    });
  }

  cambiarFormatoFecha(fecha: Date): string {
    return `${fecha.getUTCFullYear()}-${fecha.getMonth() + 1 < 10 ? '0' + (fecha.getMonth() + 1) : fecha.getMonth() + 1}-${fecha.getDate() < 10 ? '0' + fecha.getDate() : fecha.getDate()}T${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}.${fecha.getMilliseconds()}Z`;
  }

}
