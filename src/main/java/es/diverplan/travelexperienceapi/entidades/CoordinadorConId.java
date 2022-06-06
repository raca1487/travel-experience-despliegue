package es.diverplan.travelexperienceapi.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import es.diverplan.travelexperienceapi.repositorios.CoordinadorConIdListener;
import es.diverplan.trex.Coordinador;

@Entity
@EntityListeners(CoordinadorConIdListener.class)
@Table(name = "COORDINADORES")
public class CoordinadorConId extends Coordinador {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private long id;
	@OneToOne(mappedBy = "coordinador")
	private ActividadConId actividad;

	public long getId() {
		return id;
	}

	public ActividadConId getActividad() {
		return actividad;
	}

	public void setActividad(ActividadConId actividad) {
		this.actividad = actividad;
	}

	public CoordinadorConId() {
		super();
	}

}
