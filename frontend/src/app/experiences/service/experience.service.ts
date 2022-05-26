import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Actividad } from '../models/actividad';
import { ActividadImpl } from '../models/actividad-impl';
import { Viaje } from '../models/viaje';
import { ViajeImpl } from '../models/viaje-impl';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  // url de la API
  private host: string = environment.host;
  // url de los Viajes (API)
  private urlEndPointV: string = `${this.host}viajes`
  // url de las Actividades (API)
  private urlEndPointA: string = `${this.host}actividades`

  constructor(private http: HttpClient) { }

  // método para conseguir el ID
  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    //console.log(numId);
    return numId;
  }

  /*
  * Métodos para conseguir un listado de Viajes y mapearlos desde la API
  */
  getViajes(): Observable<Viaje> {
    return this.http.get<any>(this.urlEndPointV);
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
    viaje.id = this.getId(viajeApi._links.viaje.href);
    viaje.nombre = viajeApi.nombre;
    viaje.descripcion = viajeApi.descripcion;
    viaje.fechaSalida = viajeApi.fechaSalida;
    viaje.numeroNoches = viajeApi.numeroNoches;
    viaje.precioTotal = viajeApi.precioTotal;
    //console.log(viaje);
    return viaje;
  }


  /*
  * CRUD de Viajes
  */
  createV(viaje: Viaje): Observable<any> {
    return this.http.post(`${this.urlEndPointV}`, viaje).pipe(
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

  deleteV(id: string): Observable<Viaje> {
    return this.http
      .delete<Viaje>(`${this.urlEndPointV}/${id}`)
      .pipe(
        catchError((e) => {
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        })
      );
  }

  updateV(viaje: Viaje): Observable<any> {
    return this.http
      .put<any>(`${this.urlEndPointV}/${viaje.id}`, viaje)
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

  getViaje(id: string): Observable<Viaje> {
    return this.http.get<Viaje>(`${this.urlEndPointV}/${id}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }


  /*
  * Métodos para conseguir un listado de Actividades y mapearlos desde la API
  */
  getActividades(): Observable<Actividad> {
    return this.http.get<any>(this.urlEndPointA);
  }

  extraerActividades(respuestaApi: any): Actividad[] {
    const actividades: Actividad[] = [];
    respuestaApi._embedded.actividades.forEach((ac: any) => {
      actividades.push(this.mapearActividad(ac));
    });
    //console.log(actividades);
    return actividades;
  }

  mapearActividad(actividadApi: any): Actividad {
    //console.log(actividadApi);
    let actividad: Actividad = new ActividadImpl();
    actividad.id = this.getId(actividadApi._links.actividad.href);
    actividad.nombre = actividadApi.nombre;
    actividad.descripcion = actividadApi.descripcion;
    actividad.ciudad = actividadApi.ciudad;
    actividad.coordinador = actividadApi._links.coordinador.href;
    //console.log(actividad);
    return actividad;
  }


  /*
  * CRUD de Viajes
  */
  createA(actividad: Actividad): Observable<any> {
    return this.http.post(`${this.urlEndPointA}`, actividad).pipe(
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

  deleteA(id: string): Observable<Actividad> {
    return this.http
      .delete<Actividad>(`${this.urlEndPointA}/${id}`)
      .pipe(
        catchError((e) => {
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        })
      );
  }

  updateA(actividad: Actividad): Observable<any> {
    return this.http
      .put<any>(`${this.urlEndPointA}/${actividad.id}`, actividad)
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

  getActividad(id: string): Observable<Actividad> {
    return this.http.get<Actividad>(`${this.urlEndPointA}/${id}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

}
