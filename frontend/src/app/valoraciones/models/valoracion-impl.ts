import { Valoracion } from "./valoracion";

export class ValoracionImpl implements Valoracion {
  idValoracion: string = "";
  titulo: string = "";
  comentario: string = "";
  puntuacion: number = 0;
  entretenimiento: string = "";
  fechaPublicacion: string = "";

  constructor() {}

}
