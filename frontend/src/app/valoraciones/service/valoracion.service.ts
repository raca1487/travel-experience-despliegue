import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Viaje } from 'src/app/experiences/models/viaje';
import { ViajeImpl } from 'src/app/experiences/models/viaje-impl';
import { environment } from 'src/environments/environment';
//import { environment } from 'src/environments/environment.prod';
import { Valoracion } from '../models/valoracion';
import { ValoracionImpl } from '../models/valoracion-impl';

@Injectable({
  providedIn: 'root'
})
export class ValoracionService {
  // url de la API
  private host: string = environment.host;
  // url de las Valoraciones (API)
  private urlEndPoint: string = `${this.host}valoraciones`

  constructor(private http: HttpClient) { }

  // método para conseguir el ID
  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    // console.log(numId);
    return numId;
  }

  /*
  * Métodos paa conseguir un listado de Viajes y mapearlos desde la API
  */
  getValoraciones(): Observable<Valoracion> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerValoraciones(respuestaApi: any): Valoracion[] {
    const valoraciones: Valoracion[] = [];
    respuestaApi._embedded.valoraciones.forEach((vl: any) => {
      valoraciones.push(this.mapearValoracion(vl));
    });
    // console.log(valoraciones);
    return valoraciones;
  }

  mapearValoracion(valoracionApi: any): Valoracion {
    // console.log(valoracionApi);
    let viaje: Viaje = new ViajeImpl();
    let valoracion: Valoracion = new ValoracionImpl();
    valoracion.titulo = valoracionApi.titulo;
    valoracion.comentario = valoracionApi.comentario;
    valoracion.puntuacion = valoracionApi.puntuacion;
    valoracion.idExperiencia = `${this.urlEndPoint}viaje/${viaje.id}`;
    // console.log(valoracion);
    return valoracion;
  }


  /*
  * CRUD de Valoraciones
  */
  getValoracion(id: string): Observable<Valoracion> {
    return this.http.get<Valoracion>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
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
