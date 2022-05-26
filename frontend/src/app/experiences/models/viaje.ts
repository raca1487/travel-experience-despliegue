import { Entretenimiento } from "./entretenimiento";

export interface Viaje extends Entretenimiento {
  //viajeId: string;
  //nombre: string;
  //descripcion: string;
  fechaSalida: string;
  numeroNoches: number;
  precioTotal: number;
}
