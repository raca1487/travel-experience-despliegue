import { Valoracion } from "./valoracion";
import { Viaje } from "./viaje";

export class ViajeImpl implements Viaje {

  id: string = "";
  nombre: string = "";
  descripcion: string = "";
  fechaSalida: string = "";
  duracionViaje: number = 0;
  precio: number = 0;
  valoraciones: Valoracion[] = [];

  constructor() {}

}
