import { Entretenimiento } from "./entretenimiento";

export interface Actividad extends Entretenimiento {
  //actividadId: string;
  //nombre: string;
  //descripcion: string;
  ciudad: string;
  coordinadorHref: string;
}
