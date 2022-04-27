package es.diverplan.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import es.diverplan.trex.Valoracion;

@Entity
@Table(name = "VALORACIONES")
public class ValoracionConId extends Valoracion {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private Long id;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_VIAJE")
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
