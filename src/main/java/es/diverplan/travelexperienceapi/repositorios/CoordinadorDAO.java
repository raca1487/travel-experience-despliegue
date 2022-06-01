package es.diverplan.travelexperienceapi.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import es.diverplan.travelexperienceapi.entidades.CoordinadorConId;

@RepositoryRestResource(path = "coordinadores", itemResourceRel = "coordinador", collectionResourceRel = "coordinadores")
public interface CoordinadorDAO extends JpaRepository<CoordinadorConId, Long> {

}
