package es.diverplan.travelexperienceapi.entidades;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import es.diverplan.trex.Entretenimiento;
import es.diverplan.trex.Valoracion;

@Entity
@Table(name = "EXPERIENCIAS")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="TIPO_EXPERIENCIA", discriminatorType = DiscriminatorType.STRING)
public class EntretenimientoConId extends Entretenimiento {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private long id;
	
	public long getId() {
		return id;
	}
	
	public EntretenimientoConId() {
		super();
	}
	
	public EntretenimientoConId(String titulo, String descripcion) {
		super(titulo, descripcion);
	}
	
	@Override
	@OneToMany(cascade = CascadeType.ALL, targetEntity = ValoracionConId.class, mappedBy = "entretenimiento", orphanRemoval = true)
	public List<Valoracion> getValoraciones() {
		return super.getValoraciones();
	}
	
	// Establece la relacion en los dos sentidos
	public void addValoracionConId(ValoracionConId valoracion) {
		super.addValoracion(valoracion);
		valoracion.setEntretenimiento(this);
	}
	
	public int mediaValoraciones() {
		int acumulador = 0;
		int media = 0;
		int tamano = getValoraciones().size();
		for (Valoracion valoracion : getValoraciones()) {
			acumulador += valoracion.getPuntuacion();
			media = acumulador / tamano;
		}
		
		return media;
		
	}

}
