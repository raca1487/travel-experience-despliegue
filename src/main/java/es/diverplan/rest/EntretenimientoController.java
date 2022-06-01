package es.diverplan.rest;

import java.util.List;

import org.springframework.data.rest.webmvc.PersistentEntityResource;
import org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.hateoas.CollectionModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

//import es.diverplan.entidades.EntretenimientoConId;
import es.diverplan.repositorios.EntretenimientoDAO;
import es.diverplan.trex.Entretenimiento;

@RepositoryRestController

public class EntretenimientoController {
	
	private EntretenimientoDAO entretenimientoDAO;
	
	public EntretenimientoController(EntretenimientoDAO entretenimientoDAO) {
		this.entretenimientoDAO = entretenimientoDAO;
	}
	
	@GetMapping("/entretenimientos/search/por-media")
	@ResponseBody
	public CollectionModel<PersistentEntityResource> getExperienciasPorMedia(@RequestParam("media") int media,
			PersistentEntityResourceAssembler assembler) {
		
		List<Entretenimiento> experiencias = entretenimientoDAO.getExperienciasPorMedia(media);
		
		return assembler.toCollectionModel(experiencias);
	}

}
