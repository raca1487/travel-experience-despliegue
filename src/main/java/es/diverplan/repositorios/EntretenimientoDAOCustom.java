package es.diverplan.repositorios;

import java.util.List;

//import es.diverplan.entidades.EntretenimientoConId;
import es.diverplan.trex.Entretenimiento;

public interface EntretenimientoDAOCustom {
	
	List<Entretenimiento> getExperienciasPorMedia(int media);

}
