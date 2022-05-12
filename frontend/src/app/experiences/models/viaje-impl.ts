import { RangeValueAccessor } from "@angular/forms";
import { Viaje } from "./viaje";

export class ViajeImpl implements Viaje {

  viajeId: number = 0;
  nombre: string = "";
  descripcion: string = "";
  fechaSalida: string = "";
  duracionViaje: number = 0;
  precio: number = 0;

  constructor() {}

}
