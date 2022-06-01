package es.diverplan.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.diverplan.entidades.ActividadConId;
import es.diverplan.entidades.EntretenimientoConId;
import es.diverplan.entidades.ViajeConId;

@RepositoryRestResource(path = "actividades", itemResourceRel = "actividad", collectionResourceRel = "actividades")
public interface ActividadDAO extends JpaRepository<ActividadConId, Long> {
	
	@RestResource(path = "por-ciudad")
	List<ActividadConId> findByCiudad(String ciudad);

}
