import { Valoracion } from "./valoracion";

export class ValoracionImpl implements Valoracion {
  titulo: string = "";
  comentario: string = "";
  puntuacion: number = 0;
  idViaje: string = "";

  constructor() {}
}
