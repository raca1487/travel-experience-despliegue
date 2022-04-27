package es.diverplan.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import es.diverplan.trex.Entretenimiento;

@RepositoryRestResource(path = "entretenmientos", itemResourceRel = "entretenimiento", collectionResourceRel = "entretenimientos")
public interface EntretenimientoDAO extends JpaRepository<Entretenimiento, String>{

}
