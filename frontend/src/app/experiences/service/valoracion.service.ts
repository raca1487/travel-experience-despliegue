import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Valoracion } from '../models/valoracion';
import { ValoracionImpl } from '../models/valoracion-impl';
import { Viaje } from '../models/viaje';

@Injectable({
  providedIn: 'root'
})
export class ValoracionService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}experiences/viaje`;

  constructor(private http: HttpClient) { }

  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    //console.log(numId);
    return numId;
  }

  getValoraciones(): Observable<any> {
    return this.http.get<any>(`${this.host}experiences/viaje`);
  }

  extraerValoraciones(respuestaApi: any): Valoracion[] {
    const valoraciones: Valoracion[] = [];
    respuestaApi._embedded.valoraciones.forEach((vl: any) => {
      valoraciones.push(this.mapearValoracion(vl));
    });
    return valoraciones;
  }

  mapearValoracion(valoracionApi: any): ValoracionImpl {
    const valoracion = new ValoracionImpl();
    valoracion.titulo = valoracionApi.titulo;
    valoracion.comentario = valoracionApi.comentario;
    valoracion.puntuacion = valoracionApi.puntuacion;
    valoracion.idViaje = this.getId(valoracionApi._links.viaje.href);  //  CUIDADO AQUI

    return valoracion;
  }

  getValoracion(viaje: Viaje): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/viaje/${viaje.id}`);
  }

  create(valoracion: Valoracion): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, valoracion).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

}
