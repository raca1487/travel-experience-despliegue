package es.diverplan.travelexperienceapi.repositorios;

import javax.persistence.PostPersist;
import javax.persistence.PrePersist;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import es.diverplan.travelexperienceapi.entidades.ActividadConId;

@Component
public class ActividadConIdListener {
	
	private ActividadDAO actividadDAO;
	private Logger log = LoggerFactory.getLogger(ActividadConIdListener.class);
	
	@Autowired
	public void init(ActividadDAO actividadDAO) {
		this.actividadDAO = actividadDAO;
	}
	
	@PostPersist
	// invocado automaticamente antes del persist (guardar)
	public void postRegistrarActividad(ActividadConId actividad) {
		log.info("Se ha registrado una actividad con id #" + actividad.getId());
	}
	
	@PrePersist
	public void preRegistrarActividad(ActividadConId actividad) throws Exception {
		if (actividad.getCoordinador() == null) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La Actividad tiene que tener un Coordinador");
		}
		if (actividad.getCiudad().equals(null)) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La Actividad tiene que tener asignada una ciudad");
		}
	}

}
