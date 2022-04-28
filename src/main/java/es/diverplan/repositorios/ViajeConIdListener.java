package es.diverplan.repositorios;

import javax.persistence.PostPersist;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import es.diverplan.entidades.ViajeConId;

@Component
public class ViajeConIdListener {
	
	private ViajeDAO viajeDAO;
	private Logger log = LoggerFactory.getLogger(ViajeConIdListener.class);
	
	@Autowired
	public void init(ViajeDAO viajeDAO) {
		this.viajeDAO = viajeDAO;
	}
	
	@PostPersist
	// invocado automaticamente antes del persist (guardar)
	public void postRegistrarViaje(ViajeConId viaje) {
		log.info("Se ha registrado un viaje con id #" + viaje.getId());
	}

	
}
