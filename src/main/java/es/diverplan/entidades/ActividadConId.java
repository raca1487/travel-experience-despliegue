package es.diverplan.entidades;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.OneToOne;

import es.diverplan.repositorios.ActividadConIdListener;
import es.diverplan.trex.interfaces.Actividad;

@Entity
@EntityListeners(ActividadConIdListener.class)
//@Table(name = "ACTIVIDADES")
@Access(value=AccessType.FIELD)
@DiscriminatorValue("ACTIVIDAD")
public class ActividadConId extends EntretenimientoConId implements Actividad {

	private String ciudad;
	
	@OneToOne(targetEntity = CoordinadorConId.class)
	private CoordinadorConId coordinador;
	
	public ActividadConId() {
		super();
	}
	
	@Override
	public String getCiudad() {
		return ciudad;
	}

	@Override
	public CoordinadorConId getCoordinador() {
		return coordinador;
	}
	
	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}
	
	public void setCoordinador(CoordinadorConId coordinador) {
		this.coordinador = coordinador;
	}


}
