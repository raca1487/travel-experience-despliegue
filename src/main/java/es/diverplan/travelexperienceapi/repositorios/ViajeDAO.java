package es.diverplan.travelexperienceapi.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.diverplan.travelexperienceapi.entidades.ViajeConId;

@RepositoryRestResource(path = "viajes", itemResourceRel = "viaje", collectionResourceRel = "viajes")
public interface ViajeDAO extends JpaRepository<ViajeConId, Long> {
	
	@RestResource(path = "por-precio")
	List<ViajeConId> findByPrecio(Float precio);

}
