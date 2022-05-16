import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Valoracion } from '../models/valoracion';

@Injectable({
  providedIn: 'root',
})
export class ValoracionService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}experiences`;

  constructor() {}

  registrar(valoracion: Valoracion): void {
    console.log(`Se ha registrado una valoración: ${JSON.stringify(valoracion)}`);
  }
}
