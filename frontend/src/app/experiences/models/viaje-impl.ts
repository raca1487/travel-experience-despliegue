import { Viaje } from "./viaje";

export class ViajeImpl implements Viaje {
  viajeId: string = "";
  nombre: string = "";
  descripcion: string = "";
  fechaSalida: string = "";
  numeroNoches: number = 0;
  precioTotal: number = 0;

  constructor() {}

}
