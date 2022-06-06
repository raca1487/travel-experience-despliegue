package es.diverplan.travelexperienceapi.repositorios;

import java.util.Set;

import es.diverplan.travelexperienceapi.entidades.EntretenimientoConId;

public interface EntretenimientoDAOCustom {
	
	Set<EntretenimientoConId> getExperienciasPorMedia(Integer puntuacion);

}
