package es.diverplan.travelexperienceapi.entidades;

import java.time.LocalDate;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;

import es.diverplan.travelexperienceapi.repositorios.ViajeConIdListener;
import es.diverplan.trex.interfaces.Viaje;

@Entity
@EntityListeners(ViajeConIdListener.class)
//@Table(name = "VIAJES")
@Access(value=AccessType.FIELD)
@DiscriminatorValue("VIAJE")
public class ViajeConId extends EntretenimientoConId implements Viaje {
	
	private LocalDate fechaSalida;
	private int duracionViaje;
	private float precio;

	@Override
	public LocalDate getFechaSalida() {
		return fechaSalida;
	}

	@Override
	public int getDuracionViaje() {
		return duracionViaje;
	}

	@Override
	public float getPrecio() {
		return precio;
	}
	
	public ViajeConId() {
		super();
	}
	
	public ViajeConId(String titulo, String descripcion, LocalDate fechaSalida, int duracionViaje, float precio) {
		super(titulo, descripcion);
		this.fechaSalida = fechaSalida;
		this.duracionViaje = duracionViaje;
		this.precio = precio;
	}

}
