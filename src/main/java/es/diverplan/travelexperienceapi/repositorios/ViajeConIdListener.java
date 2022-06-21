package es.diverplan.travelexperienceapi.repositorios;

import javax.persistence.PostPersist;
import javax.persistence.PrePersist;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import es.diverplan.travelexperienceapi.entidades.ViajeConId;

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
	
	@PrePersist
	public void preRegistrarViaje(ViajeConId viaje) throws Exception {
		if (viaje.getDuracionViaje() <= 0) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La duracion del Viaje no puede ser cero o negativo");
		}
		if (viaje.getPrecio() < 0) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "El precio del Viaje no puede ser negativo");
		}
	}

	
}
