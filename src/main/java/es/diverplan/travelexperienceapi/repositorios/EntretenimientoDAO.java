package es.diverplan.travelexperienceapi.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.diverplan.travelexperienceapi.entidades.EntretenimientoConId;

@RepositoryRestResource(path = "entretenimientos", itemResourceRel = "entretenimiento", collectionResourceRel = "entretenimientos")
public interface EntretenimientoDAO extends JpaRepository<EntretenimientoConId, Long>, EntretenimientoDAOCustom {
	
	@RestResource(path = "por-nombre")
//	@Query("SELECT e FROM EntretenimientoConId e WHERE UPPER(e.titulo) LIKE UPPER(concat('%', :txt, '%'))")
	List<EntretenimientoConId> findByTituloContainingIgnoreCase(@Param("nombre") String txt);
	
//	@RestResource(path = "por-id")
//	List<EntretenimientoConId> findById(String id);

}
