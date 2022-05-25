package es.diverplan.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import es.diverplan.entidades.EntretenimientoConId;

@RepositoryRestResource(path = "entretenimientos", itemResourceRel = "entretenimiento", collectionResourceRel = "entretenimientos")
public interface EntretenimientoDAO extends JpaRepository<EntretenimientoConId, Long> {

}
