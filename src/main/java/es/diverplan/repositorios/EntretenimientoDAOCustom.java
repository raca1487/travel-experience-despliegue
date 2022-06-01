package es.diverplan.repositorios;

import java.util.List;

import es.diverplan.entidades.EntretenimientoConId;

public interface EntretenimientoDAOCustom {
	
	List<EntretenimientoConId> getExperienciasPorMedia(int media);

}
