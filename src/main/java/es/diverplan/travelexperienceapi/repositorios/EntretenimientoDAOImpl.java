package es.diverplan.travelexperienceapi.repositorios;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import es.diverplan.travelexperienceapi.entidades.EntretenimientoConId;
import es.diverplan.trex.Valoracion;

@Transactional(readOnly = true)
public class EntretenimientoDAOImpl implements EntretenimientoDAOCustom {

	@Autowired
	EntretenimientoDAO entretenimientoDAO;
	ValoracionDAO valoracionDAO;

	@PersistenceContext
	EntityManager entityManager;

//	@Override
//	public Set<EntretenimientoConId> getExperienciasPorMedia(Integer puntuacion) {
//		List<EntretenimientoConId> experiencias = entretenimientoDAO.findAll();
//		Set<EntretenimientoConId> experienciasFiltradas = new HashSet<EntretenimientoConId>();
//		for (EntretenimientoConId experiencia : experiencias) {
//			for (Valoracion valoracion : experiencia.getValoraciones()) {
//				if (valoracion.getPuntuacion() >= puntuacion) {
//					experienciasFiltradas.add(experiencia);
//				}
//			}
//		}
//		
//		return experienciasFiltradas;
//	}

	@Override
	public Set<EntretenimientoConId> getExperienciasPorMedia(Integer puntuacion) {
		List<EntretenimientoConId> experiencias = entretenimientoDAO.findAll();
		Set<EntretenimientoConId> experienciasFiltradas = new HashSet<EntretenimientoConId>();
		for (EntretenimientoConId experiencia : experiencias) {
			if (experiencia.valoracionAverage() >= puntuacion) {
				experienciasFiltradas.add(experiencia);
			}
		}

		return experienciasFiltradas;
	}

}
