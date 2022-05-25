package es.diverplan.repositorios;

import javax.persistence.PostPersist;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import es.diverplan.entidades.ActividadConId;

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

	
}
