package es.diverplan.entidades;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import es.diverplan.repositorios.ViajeConIdListener;
import es.diverplan.trex.Valoracion;
import es.diverplan.trex.Viaje;

@Entity
@EntityListeners(ViajeConIdListener.class)
@Table(name = "VIAJES")
public class ViajeConId extends Viaje {
	
	public ViajeConId() {
		super();
	}
	
	@Override
	@OneToMany(targetEntity = ValoracionConId.class)
	public List<Valoracion> getValoraciones() {
		return super.getValoraciones();
	}
	
	public void addValoracionConId(ValoracionConId valoracion) {
		super.getValoraciones().add(valoracion);
		valoracion.setViaje(this);
	}
	
}
