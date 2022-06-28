package es.diverplan.travelexperienceapi.repositorios;

import javax.persistence.PostPersist;
import javax.persistence.PrePersist;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import es.diverplan.travelexperienceapi.entidades.ValoracionConId;

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
		log.info("Se ha registrado una valoracion con id #" + valoracion.getId());
	}
	
	@PrePersist
	public void preRegistrarValoracion(ValoracionConId valoracion) throws Exception {
		if (valoracion.getPuntuacion() <= 0) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La puntuacion no puede ser 0 o negativa");
		}

		if (valoracion.getPuntuacion() > 5) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La puntuacion tiene que no puede ser mayor que 5");
		}
	}

}
