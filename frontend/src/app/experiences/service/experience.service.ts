import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';
import { Valoracion } from 'src/app/valoraciones/models/valoracion';
import { ValoracionImpl } from 'src/app/valoraciones/models/valoracion-impl';
//import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';
import { Actividad } from '../models/actividad';
import { ActividadImpl } from '../models/actividad-impl';
import { Coordinador } from '../models/coordinador';
import { CoordinadorImpl } from '../models/coordinador-impl';
import { Viaje } from '../models/viaje';
import { ViajeImpl } from '../models/viaje-impl';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  // url de la API
  private host: string = environment.host;
  // url de los Entretenimientos (API)
  private urlEndPointE: string = `${this.host}entretenimientos`;
  // url de los Viajes (API)
  private urlEndPointV: string = `${this.host}viajes`;
  // url de las Actividades (API)
  private urlEndPointA: string = `${this.host}actividades`;
  // url de los Coordinadores (API)
  private urlEndPointC: string = `${this.host}coordinadores`;

  constructor(private http: HttpClient) {}

  // método para conseguir el ID
  getId(url: string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);

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
    let respuesta: any = respuestaApi._embedded.viajes;
    if (respuesta === undefined) {
      console.info("No hay Viajes");
    } else
    respuestaApi._embedded.viajes.forEach((vj: any) => {
      viajes.push(this.mapearViaje(vj));
    });

    return viajes;
  }

  mapearViaje(viajeApi: any): Viaje {
    let viaje: Viaje = new ViajeImpl();
    viaje.id = this.getId(viajeApi._links.viaje.href);
    viaje.nombre = viajeApi.nombre;
    viaje.descripcion = viajeApi.descripcion;
    viaje.fechaSalida = viajeApi.fechaSalida;
    viaje.numeroNoches = viajeApi.numeroNoches;
    viaje.precioTotal = viajeApi.precioTotal;
    viaje.valoracionesHref = viajeApi._links.valoraciones.href;

    return viaje;
  }

  /*
   * CRUD de Viajes
   */
  createV(viaje: Viaje): Observable<any> {
    return this.http.post(this.urlEndPointV, viaje).pipe(
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

  deleteV(id: string): Observable<Viaje> {
    return this.http.delete<Viaje>(`${this.urlEndPointV}/${id}`).pipe(
      catchError((e) => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  updateV(viaje: Viaje): Observable<any> {
    return this.http.patch<any>(`${this.urlEndPointV}/${viaje.id}`, viaje);
  }

  getViaje(id: string): Observable<Viaje> {
    return this.http.get<Viaje>(`${this.urlEndPointV}/${id}`)
    // .pipe(
    //   catchError((e) => {
    //     if (e.status !== 401 && e.error.mensaje) {
    //       console.error(e.error.mensaje);
    //     }
    //     return throwError(() => new Error(e));
    //   })
    // )
    ;
  }

  /*
   * Métodos para conseguir un listado de Actividades y mapearlos desde la API
   */
  getActividades(): Observable<Actividad> {
    return this.http.get<any>(this.urlEndPointA);
  }

  extraerActividades(respuestaApi: any): Actividad[] {
    const actividades: Actividad[] = [];
    let respuesta: any = respuestaApi._embedded.actividades;
    if (respuesta === undefined) {
      console.info("No hay Actividades");
    } else
    respuestaApi._embedded.actividades.forEach((ac: any) => {
      actividades.push(this.mapearActividad(ac));
    });

    return actividades;
  }

  mapearActividad(actividadApi: any): Actividad {
    let actividad: Actividad = new ActividadImpl();
    actividad.id = this.getId(actividadApi._links.actividad.href);
    actividad.nombre = actividadApi.nombre;
    actividad.descripcion = actividadApi.descripcion;
    actividad.ciudad = actividadApi.ciudad;
    actividad.coordinador = actividadApi._links.coordinador.href;
    actividad.valoracionesHref = actividadApi._links.valoraciones.href;

    return actividad;
  }

  /*
   * CRUD de Actividades
   */
  createA(actividad: Actividad): Observable<any> {
    return this.http.post(this.urlEndPointA, actividad).pipe(
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

  deleteA(id: string): Observable<Actividad> {
    return this.http.delete<Actividad>(`${this.urlEndPointA}/${id}`).pipe(
      catchError((e) => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  updateA(actividad: Actividad): Observable<any> {
    return this.http
      .patch<any>(`${this.urlEndPointA}/${actividad.id}`, actividad)
      .pipe(
        catchError((e) => {
          if (e.status === 400) {
            return throwError(() => new Error(e));
          }
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(() => new Error(e));
        })
      );
  }

  getActividad(id: string): Observable<Actividad> {
    return this.http.get<Actividad>(`${this.urlEndPointA}/${id}`)
    // .pipe(
    //   catchError((e) => {
    //     if (e.status !== 401 && e.error.mensaje) {
    //       console.error(e.error.mensaje);
    //     }
    //     return throwError(() => new Error(e));
    //   })
    // )
    ;
  }

  /*
   * Métodos para conseguir un listado de Coordinadores y mapearlos desde la API
   */
  getCoordinadores(): Observable<any> {
    return this.http.get<any>(this.urlEndPointC).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  extraerCoordinadores(respuestaApi: any): Coordinador[] {
    const coordinadores: Coordinador[] = [];
    let respuesta: any = respuestaApi._embedded.coordinadores;
    if (respuesta === undefined) {
      console.info("No hay Coordinadores");
    } else
    respuestaApi._embedded.coordinadores.forEach((c: any) => {
      coordinadores.push(this.mapearCoordinador(c));
    });

    return coordinadores;
  }

  mapearCoordinador(coordinadorApi: any): Coordinador {
    let coordinador: Coordinador = new CoordinadorImpl();
    coordinador.idCoordinador = this.getId(coordinadorApi._links.coordinador.href);
    coordinador.nombre = coordinadorApi.nombre;
    coordinador.apellidos = coordinadorApi.apellidos;
    coordinador.telefono = coordinadorApi.telefono;
    coordinador.email = coordinadorApi.email;
    coordinador.residencia = coordinadorApi.residencia;
    coordinador.fechaNac = coordinadorApi.fechaNac;
    coordinador.url = coordinadorApi._links.self.href;

    return coordinador;
  }

  /*
   * CRUD de Coordinadores
   */
  createC(coordinador: Coordinador): Observable<any> {
    return this.http.post(this.urlEndPointC, coordinador).pipe(
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

  deleteC(id: string): Observable<Coordinador> {
    return this.http.delete<Coordinador>(`${this.urlEndPointC}/${id}`).pipe(
      catchError((e) => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(() => new Error(e));
      })
    );
  }

  updateC(coordinador: Coordinador): Observable<any> {
    return this.http
      .patch<any>(`${this.urlEndPointC}/${coordinador.idCoordinador}`, coordinador)
      .pipe(
        catchError((e) => {
          if (e.status === 400) {
            return throwError(() => new Error(e));
          }
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(() => new Error(e));
        })
      );
  }

  getCoordinador(id: string): Observable<Coordinador> {
    return this.http
      .get<Coordinador>(`${this.urlEndPointA}/${id}/coordinador`)
      // .pipe(
      //   catchError((e) => {
      //     if (e.status !== 401 && e.error.mensaje) {
      //       console.error(e.error.mensaje);
      //     }
      //     return throwError(() => new Error(e));
      //   })
      // )
      ;
  }

  getCoordinadorUrl(url: string): Observable<Coordinador> {
    return this.http.get<Coordinador>(`${url}`);
  }

  /*
   * Métodos para conseguir un listado de Valoraciones y mapearlos desde la API
   */
  getValoracionesViajes(viaje: Viaje): Observable<any> {
    return this.http.get<any>(`${this.urlEndPointV}/${viaje.id}/valoraciones`);
  }

  getValoracionesActividades(actividad: Actividad): Observable<any> {
    return this.http.get<any>(`${this.urlEndPointA}/${actividad.id}/valoraciones`);
  }

  getValoracionesIdViaje(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPointV}/${id}/valoraciones`);
  }

  getValoracionesIdActividad(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPointA}/${id}/valoraciones`);
  }

  extraerValoracionEntretenimiento(respuestaApi: any): any[] {
    const valoraciones: any[] = [];
    let respuesta: any = respuestaApi._embedded.valoraciones;
    if (respuesta === undefined) {
      console.info("No hay Valoraciones");
    } else
    respuestaApi._embedded.valoraciones.forEach((vl: any) => {
      valoraciones.push(vl);
    });

    return valoraciones;
  }

  extraerValoraciones(respuestaApi: any): Valoracion[] {
    const valoraciones: Valoracion[] = [];
    let respuesta: any = respuestaApi._embedded.valoraciones;
    if (respuesta === undefined) {
      console.info("No hay Valoraciones");
    } else
    respuestaApi._embedded.valoraciones.forEach((vl: any) => {
      valoraciones.push(this.mapearValoracion(vl));
    });

    return valoraciones;
  }

  mapearValoracion(valoracionApi: any): Valoracion {
    let valoracion: Valoracion = new ValoracionImpl();
    valoracion.titulo = valoracionApi.titulo;
    valoracion.comentario = valoracionApi.comentario;
    valoracion.puntuacion = valoracionApi.puntuacion;
    valoracion.entretenimiento = valoracionApi._links.entretenimiento.href;

    return valoracion;
  }

  /*
   * Método Personalizado
   */
  getPersonalizado(puntuacion: number): Observable<any> {
    return this.http.get<any>(`${this.urlEndPointE}/search/por-media?puntuacion=${puntuacion}`);
  }

}
