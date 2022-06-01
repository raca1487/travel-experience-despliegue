package es.diverplan.travelexperienceapi.repositorios;

import java.util.List;

import es.diverplan.travelexperienceapi.entidades.EntretenimientoConId;

public interface EntretenimientoDAOCustom {
	
	List<EntretenimientoConId> getExperienciasPorMedia(int media);

}
