package es.diverplan.repositorios;

import javax.persistence.PostPersist;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import es.diverplan.entidades.CoordinadorConId;

@Component
public class CoordinadorConIdListener {

	private CoordinadorDAO coordinadorDAO;
	private Logger log = LoggerFactory.getLogger(CoordinadorConIdListener.class);

	@Autowired
	public void init(CoordinadorDAO coordinadorDAO) {
		this.coordinadorDAO = coordinadorDAO;
	}

	@PostPersist
	// invocado automaticamente antes del persist (guardar)
	public void postRegistrarCoordinador(CoordinadorConId coordinador) {
		log.info("Se ha registrado un coordinador con nombre" + coordinador.getNombre() + " " + coordinador.getApellidos());
	}

}
