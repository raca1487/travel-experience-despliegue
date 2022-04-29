package es.diverplan.entidades;

import es.diverplan.trex.Entretenimiento;
import es.diverplan.trex.Valoracion;

public class EntretenimientoConId extends Entretenimiento {

	public EntretenimientoConId() {
		super();
	}

	@Override
	public boolean addValoracion(Valoracion valoracion) {
		return super.getValoraciones().add(valoracion);
	}

}
