package es.diverplan.travelexperienceapi.entidades;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.OneToOne;

import es.diverplan.travelexperienceapi.repositorios.ActividadConIdListener;
import es.diverplan.trex.Coordinador;
import es.diverplan.trex.interfaces.Actividad;

@Entity
@EntityListeners(ActividadConIdListener.class)
@Access(value=AccessType.FIELD)
@DiscriminatorValue("ACTIVIDAD")
public class ActividadConId extends EntretenimientoConId implements Actividad {

	private String ciudad;
	@OneToOne(targetEntity = CoordinadorConId.class)
	private Coordinador coordinador;
	
	
	@Override
	public String getCiudad() {
		return ciudad;
	}

	@Override
	public Coordinador getCoordinador() {
		return coordinador;
	}
	
	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}
	
	public void setCoordinador(Coordinador coordinador) {
		this.coordinador = coordinador;
	}
	
	public ActividadConId() {
		super();
	}
	
	public ActividadConId(String titulo, String descripcion, String ciudad, Coordinador coordinador) {
		super(titulo, descripcion);
		this.ciudad = ciudad;
		this.coordinador = coordinador;		
	}

}
