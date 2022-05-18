import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from "src/environments/environment.prod";
import { Viaje } from "../models/viaje";
import { ViajeImpl } from "../models/viaje-impl";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}viajes`;

  constructor(private http: HttpClient) { }

  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    //console.log(numId);
    return numId;
  }

  getViajes(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerViajes(respuestaApi: any): Viaje[] {
    const viajes: Viaje[] = [];
    respuestaApi._embedded.viajes.forEach((vj: any) => {
      viajes.push(this.mapearViaje(vj));
    });
    //console.log(viajes);
    return viajes;
  }

  mapearViaje(viajeApi: any): Viaje {
    //console.log(viajeApi);
    let viaje: Viaje = new ViajeImpl();
    viaje.id = this.getId(viajeApi._links.viaje.href);  //  CUIDADO AQUI
    viaje.nombre = viajeApi.nombre;
    viaje.descripcion = viajeApi.descripcion;
    viaje.fechaSalida = viajeApi.fechaSalida;
    viaje.duracionViaje = viajeApi.duracionViaje;
    viaje.precio = viajeApi.precio;

    // console.log(viaje);
    return viaje;
  }

  /*
  create(viaje: Viaje): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, viaje).pipe(
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

  delete(id: string): Observable<Viaje> {
    return this.http
      .delete<Viaje>(`${this.urlEndPoint}/${id}`)
      .pipe(
        catchError((e) => {
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        })
      );
  }

  update(viaje: Viaje): Observable<any> {
    return this.http
      .put<any>(`${this.urlEndPoint}/${viaje.id}`, viaje)
      .pipe(
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
*/
  getViaje(id: string): Observable<Viaje> {
    return this.http.get<Viaje>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

}