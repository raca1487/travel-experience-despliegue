import { Valoracion } from "./valoracion";

export interface Viaje {
  id: number;
  nombre: string;
  descripcion: string;
  fechaSalida: string;
  duracionViaje: number;
  precio: number;
  valoraciones: Valoracion[];
}
