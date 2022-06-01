package es.diverplan.repositorios;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

//import es.diverplan.entidades.EntretenimientoConId;
import es.diverplan.trex.Entretenimiento;

@Transactional(readOnly = true)
public class EntretenimientoDAOImpl implements EntretenimientoDAOCustom {
	
	@Autowired
	EntretenimientoDAO entretenimientoDAO;
	
	@PersistenceContext
	EntityManager entityManager;

	@Override
	public List<Entretenimiento> getExperienciasPorMedia(int media) {
		List<Entretenimiento> experiencias = entretenimientoDAO.findAll().stream()
				.filter(e -> e.valoracionAverage() >= media)
				.collect(Collectors.toList());
		
		return experiencias;
	}

}
