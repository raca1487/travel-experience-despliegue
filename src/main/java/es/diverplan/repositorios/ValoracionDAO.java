package es.diverplan.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import es.diverplan.entidades.ValoracionConId;

@RepositoryRestResource(path = "valoraciones", itemResourceRel = "valoracion", collectionResourceRel = "valoraciones")
public interface ValoracionDAO extends JpaRepository<ValoracionConId, Long> {

}
