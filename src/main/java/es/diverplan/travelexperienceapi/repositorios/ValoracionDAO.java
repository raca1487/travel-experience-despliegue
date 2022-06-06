package es.diverplan.travelexperienceapi.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.diverplan.travelexperienceapi.entidades.ValoracionConId;

@RepositoryRestResource(path="valoraciones", itemResourceRel="valoracion", collectionResourceRel="valoraciones")
public interface ValoracionDAO extends JpaRepository<ValoracionConId, Long> {
	
	@RestResource(path = "por-puntuacion")
	List<ValoracionConId> findByPuntuacionGreaterThanEqual(@Param("puntuacion") Integer puntuacion);

}
