package es.diverplan.repositorios;



import javax.persistence.PostPersist;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import es.diverplan.entidades.ValoracionConId;

@Component
public class ValoracionConIdListener {
	
	private ValoracionDAO valoracionDAO;
	private Logger log = LoggerFactory.getLogger(ValoracionConIdListener.class);
	
	@Autowired
	public void init(ValoracionDAO valoracionDAO) {
		this.valoracionDAO = valoracionDAO;
	}
	
	@PostPersist
	// invocado automaticamente antes del persist (guardar)
	public void postRegistrarValoracion(ValoracionConId valoracion) {
		log.info("Se ha registrado una valoración con id #" + valoracion.getId());
	}

	
}
