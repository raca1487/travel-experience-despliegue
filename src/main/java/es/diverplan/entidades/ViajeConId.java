package es.diverplan.entidades;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import es.diverplan.trex.Valoracion;
import es.diverplan.trex.Viaje;

@Entity
@Table(name = "VIAJES")
public class ViajeConId extends Viaje {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, name = "ID_VIAJE")
	private Long id;

	@Override
	@OneToMany(cascade = CascadeType.ALL, targetEntity = ValoracionConId.class, mappedBy = "viaje")
	public List<Valoracion> getValoraciones() {
		return super.getValoraciones();
	}

	public ViajeConId() {
		super();
	}

	// Establece la relacion en los dos sentidos
	public void addValoracionConId(ValoracionConId valoracion) {
		super.addValoracion(valoracion);
		valoracion.setViaje(this);
	}

}
