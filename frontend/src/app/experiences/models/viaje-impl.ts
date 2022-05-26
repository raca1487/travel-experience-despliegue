import { EntretenimientoImpl } from "./entretenimiento-impl";
import { Viaje } from "./viaje";

export class ViajeImpl extends EntretenimientoImpl implements Viaje {
  //viajeId: string = "";
  //nombre: string = "";
  //descripcion: string = "";
  fechaSalida: string = "";
  numeroNoches: number = 0;
  precioTotal: number = 0;

  constructor() {
    super();
  }

}
