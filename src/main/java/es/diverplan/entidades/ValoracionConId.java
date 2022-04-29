package es.diverplan.entidades;

import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import es.diverplan.repositorios.ValoracionConIdListener;
import es.diverplan.trex.Valoracion;

@EntityListeners(ValoracionConIdListener.class)
public class ValoracionConId extends Valoracion {

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "VIAJE")
	private ViajeConId viaje;
	
	public ViajeConId getViaje() {
		return viaje;
	}
	
	public void setViaje(ViajeConId viaje) {
		this.viaje = viaje;
	}
	
	public ValoracionConId(String comentario, int puntuacion) {
		super(comentario, puntuacion);
	}

}
