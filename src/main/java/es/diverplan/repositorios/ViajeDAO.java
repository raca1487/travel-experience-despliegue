package es.diverplan.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import es.diverplan.entidades.ViajeConId;

@RepositoryRestResource(path = "viajes", itemResourceRel = "viaje", collectionResourceRel = "viajes")
public interface ViajeDAO extends JpaRepository<ViajeConId, Long> {

}
