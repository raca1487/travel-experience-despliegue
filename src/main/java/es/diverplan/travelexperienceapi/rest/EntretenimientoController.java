package es.diverplan.travelexperienceapi.rest;

import java.util.Set;

import org.springframework.data.rest.webmvc.PersistentEntityResource;
import org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.hateoas.CollectionModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import es.diverplan.travelexperienceapi.entidades.EntretenimientoConId;
import es.diverplan.travelexperienceapi.repositorios.EntretenimientoDAO;

@RepositoryRestController
public class EntretenimientoController {
	
	private EntretenimientoDAO entretenimientoDAO;
	
	public EntretenimientoController(EntretenimientoDAO entretenimientoDAO) {
		this.entretenimientoDAO = entretenimientoDAO;
	}
	
	@GetMapping("/entretenimientos/search/por-media")
	@ResponseBody
	public CollectionModel<PersistentEntityResource> getExperienciasPorMedia(@RequestParam("puntuacion") Integer puntuacion,
			PersistentEntityResourceAssembler assembler) {
		
		Set<EntretenimientoConId> experiencias = entretenimientoDAO.getExperienciasPorMedia(puntuacion);
		
		return assembler.toCollectionModel(experiencias);
	}

}
