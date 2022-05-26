import { Actividad } from "./actividad";
import { EntretenimientoImpl } from "./entretenimiento-impl";

export class ActividadImpl extends EntretenimientoImpl implements Actividad {
  //actividadId: string = "";
  //nombre: string = "";
  //descripcion: string = "";
  ciudad: string = "";
  coordinador: string = "";

  constructor() {
    super();
  }

}
