package es.diverplan.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import es.diverplan.repositorios.CoordinadorConIdListener;
import es.diverplan.trex.Coordinador;

@Entity
@EntityListeners(CoordinadorConIdListener.class)
@Table(name = "COORDINADORES")
public class CoordinadorConId extends Coordinador {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private Long id;
	
	public Long getId() {
		return id;
	}
	
	public CoordinadorConId() {
		super();
	}

}
