package es.diverplan.entidades;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import es.diverplan.repositorios.ViajeConIdListener;
import es.diverplan.trex.Valoracion;
import es.diverplan.trex.Viaje;

@Entity
@EntityListeners(ViajeConIdListener.class)
@Table(name = "VIAJES")
public class ViajeConId extends Viaje {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private Long id;
	
	public Long getId() {
		return id;
	}
	
	public ViajeConId() {
		super();
	}
	
	@Override
	@OneToMany(cascade = CascadeType.ALL, targetEntity = ValoracionConId.class, mappedBy = "viaje")
	public List<Valoracion> getValoraciones() {
		return super.getValoraciones();
	}
	
	// Establece la relacion en los dos sentidos
	public void addValoracionConId(ValoracionConId valoracion) {
		super.getValoraciones().add(valoracion);
		valoracion.setViaje(this);
	}
	
}
