package es.diverplan.travelexperienceapi.entidades;

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

import es.diverplan.travelexperienceapi.repositorios.ValoracionConIdListener;
import es.diverplan.trex.Valoracion;

@Entity
@EntityListeners(ValoracionConIdListener.class)
@Table(name = "VALORACIONES")
public class ValoracionConId extends Valoracion {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private long idValoracion;

	public long getId() {
		return idValoracion;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "EXPERIENCIA", referencedColumnName = "idEntretenimiento")
	private EntretenimientoConId entretenimiento;

	public EntretenimientoConId getEntretenimiento() {
		return entretenimiento;
	}

	public void setEntretenimiento(EntretenimientoConId entretenimiento) {
		this.entretenimiento = entretenimiento;
	}

	public ValoracionConId() {
		super();
	}
	
	public ValoracionConId(String comentario, int puntuacion) {
		super(comentario, puntuacion);
	}

}
