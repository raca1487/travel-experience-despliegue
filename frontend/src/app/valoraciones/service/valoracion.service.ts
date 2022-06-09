import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Actividad } from 'src/app/experiences/models/actividad';
import { ActividadImpl } from 'src/app/experiences/models/actividad-impl';
import { Valoracion } from 'src/app/experiences/models/valoracion';
import { ValoracionImpl } from 'src/app/experiences/models/valoracion-impl';
import { Viaje } from 'src/app/experiences/models/viaje';
import { ViajeImpl } from 'src/app/experiences/models/viaje-impl';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ValoracionService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}valoraciones`;

  constructor(private http: HttpClient) {}

  // método para conseguir el ID
  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    //console.log(numId);
    return numId;
  }

  /*
   * Métodos para conseguir un listado de Valoraciones y mapearlos desde la API
   */
  getValoraciones(): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}`);
  }

  extraerValoraciones(respuestaApi: any): Valoracion[] {
    const valoraciones: Valoracion[] = [];

    respuestaApi._embedded.valoraciones.forEach((vl: any) => {
      valoraciones.push(this.mapearValoracion(vl));
    });

    return valoraciones;
  }

  mapearValoracion(valoracionApi: any): Valoracion {
    //console.log(valoracionApi);
    let valoracion: Valoracion = new ValoracionImpl();
    valoracion.titulo = valoracionApi.titulo;
    valoracion.comentario = valoracionApi.comentario;
    valoracion.puntuacion = valoracionApi.puntuacion;
    valoracion.fechaPublicacion = valoracionApi.fechaPublicacion;
    valoracion.entretenimiento = valoracionApi._links.entretenimiento.href;
    //console.log(valoracion);
    return valoracion;
  }

  /*
   * CRUD de Valoraciones
   */
  create(valoracion: Valoracion): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, valoracion).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(() => new Error(e));
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error('test'));
      })
    );
  }

  getValoracion(id: string): Observable<any> {
    return this.http.get<Valoracion>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  /*
  * Valoraciones de Viajes
  */
  getViajes(): Observable<any> {
    return this.http.get<any>(`${this.host}/viajes`);
  }

  extraerViajes(respuestaApi: any): Viaje[] {
    const viajes: Viaje[] = [];
    respuestaApi._embedded.viajes.forEach((v: any) => {
      viajes.push(this.mapearViaje(v));
    });

    return viajes;
  }

  mapearViaje(viajeApi: any): ViajeImpl {
    const viaje: Viaje = new ViajeImpl();
    viaje.nombre = viajeApi.nombre;
    viaje.descripcion = viajeApi.descripcion;
    viaje.fechaSalida = viajeApi.fechaSalida;
    viaje.numeroNoches = viajeApi.numeroNoches;
    viaje.precioTotal = viajeApi.precioTotal;
    viaje.id = this.getId(viajeApi._links.viaje.href);

    return viaje;
  }

  getViaje(valoracion: Valoracion): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${valoracion.id}/entretenimiento`);
  }

  getValoracionesDeViaje(viaje: Viaje): Observable<any> {
    return this.http.get<any>(`${this.host}/viajes/${viaje.id}/valoraciones`);
  }

  /*
  * Valoraciones de Actividades
  */
  getActividades(): Observable<any> {
    return this.http.get<any>(`${this.host}/actividades`);
  }

  extraerActividades(respuestaApi: any): Actividad[] {
    const actividades: Actividad[] = [];
    respuestaApi._embedded.actividades.forEach((a: any) => {
      actividades.push(this.mapearActividad(a));
    });

    return actividades;
  }

  mapearActividad(actividadApi: any): ActividadImpl {
    const actividad: Actividad = new ActividadImpl();
    actividad.id = this.getId(actividadApi._links.actividad.href);
    actividad.nombre = actividadApi.nombre;
    actividad.descripcion = actividadApi.descripcion;
    actividad.ciudad = actividadApi.ciudad;
    actividad.coordinador = actividadApi._links.coordinador.href;
    actividad.valoraciones = actividadApi._links.valoraciones.href;

    return actividad;
  }

  getActividad(valoracion: Valoracion): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${valoracion.id}/entretenimiento`);
  }

  getValoracionesDeActividad(actividad: Actividad): Observable<any> {
    return this.http.get<any>(`${this.host}/actividades/${actividad.id}/valoraciones`);
  }

}
