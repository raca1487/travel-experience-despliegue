package es.diverplan.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import es.diverplan.entidades.ActividadConId;
import es.diverplan.entidades.EntretenimientoConId;

@RepositoryRestResource(path = "actividades", itemResourceRel = "actividad", collectionResourceRel = "actividades")
public interface ActividadDAO extends JpaRepository<ActividadConId, Long> {

}
