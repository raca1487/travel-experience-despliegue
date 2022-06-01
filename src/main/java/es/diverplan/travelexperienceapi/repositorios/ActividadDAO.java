package es.diverplan.travelexperienceapi.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.diverplan.travelexperienceapi.entidades.ActividadConId;

@RepositoryRestResource(path = "actividades", itemResourceRel = "actividad", collectionResourceRel = "actividades")
public interface ActividadDAO extends JpaRepository<ActividadConId, Long> {
	
	@RestResource(path = "por-ciudad")
	List<ActividadConId> findByCiudad(String ciudad);

}
