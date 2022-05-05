package es.diverplan.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import es.diverplan.repositorios.ValoracionConIdListener;
import es.diverplan.trex.Valoracion;

@Entity
@EntityListeners(ValoracionConIdListener.class)
@Table(name = "VALORACIONES")
public class ValoracionConId extends Valoracion {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private Long id;
	
	public Long getId() {
		return id;
	}
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "VIAJE")
	private ViajeConId viaje;
	
	public ViajeConId getViaje() {
		return viaje;
	}
	
	public void setViaje(ViajeConId viaje) {
		this.viaje = viaje;
	}
	
	public ValoracionConId() {
		super();
	}

}
