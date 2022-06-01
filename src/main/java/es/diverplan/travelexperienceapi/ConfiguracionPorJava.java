package es.diverplan.travelexperienceapi;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;

import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.RepositorySearchesResource;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import es.diverplan.travelexperienceapi.entidades.ActividadConId;
import es.diverplan.travelexperienceapi.entidades.EntretenimientoConId;
import es.diverplan.travelexperienceapi.entidades.ValoracionConId;
import es.diverplan.travelexperienceapi.entidades.ViajeConId;
import es.diverplan.travelexperienceapi.rest.EntretenimientoController;
import es.diverplan.travelexperienceapi.rest.Mixins;

@Configuration
@PropertySource({ "classpath:config/rest.properties", "classpath:config/jackson.properties" })
@ComponentScan("es.diverplan.travelexperienceapi")
public class ConfiguracionPorJava {
	
	@Bean
	public ObjectMapper getObjectMapper() {

		ObjectMapper mapper = new ObjectMapper();
		mapper.addMixIn(ViajeConId.class, Mixins.ViajeConId.class);
		mapper.addMixIn(ActividadConId.class, Mixins.ActividadConId.class);
		mapper.addMixIn(ValoracionConId.class, Mixins.ValoracionConId.class);

		return mapper;
	}
	
	@Bean
	CorsFilter corsFilter() {
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		final CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(false);
		config.setAllowedOrigins(Collections.singletonList("*"));
		config.setAllowedHeaders(Arrays.asList("Origin", "Content-Type", "Accept"));
		config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "OPTIONS", "DELETE", "PATCH"));
		source.registerCorsConfiguration("/**", config);

		return new CorsFilter(source);
	}
	
	@Bean
	RepresentationModelProcessor<RepositorySearchesResource> addSearchLinks(RepositoryRestConfiguration config) {
		Map<Class<?>, Class<?>> controllersRegistrados = new HashMap<>();

		controllersRegistrados.put(EntretenimientoConId.class, EntretenimientoController.class);

		return new RepresentationModelProcessor<RepositorySearchesResource>() {

			@Override
			public RepositorySearchesResource process(RepositorySearchesResource searchResource) {
				
				if (controllersRegistrados.containsKey(searchResource.getDomainType())) {
					Method[] metodos = controllersRegistrados.get(searchResource.getDomainType()).getDeclaredMethods();
					for (Method m : metodos) {
						if (!m.isAnnotationPresent(ResponseBody.class))
							continue;
						try {
							Object[] pathVars = Stream.of(m.getParameters())
									.filter(p -> p.isAnnotationPresent(PathVariable.class))
									.map(p -> "(" + p.getName() + ")").collect(Collectors.toList()).toArray();
							
							// Aqui estan los cambios que hay que hacer
							URI uri;
							if (pathVars.length == 0) {
								uri = linkTo(m).toUri();
							} else {
								uri = linkTo(m, pathVars).toUri(); 
							}
							
							/* Aqui hay que cambiar todo este codigo
							
							URI uri = linkTo(m, pathVars).toUri();
							
							String path = new URI(uri.getScheme(), uri.getUserInfo(), uri.getHost(), uri.getPort(),
									config.getBasePath() + uri.getPath(), uri.getQuery(), uri.getFragment()).toString()
											.replace("(", "{").replace(")", "}");*/
							
							String path = new URI(uri.getScheme(), uri.getUserInfo(), uri.getHost(), uri.getPort(),
									config.getBasePath() + uri.getPath(), null, null).toString().replace("(", "{").replace(")", "}");
							
							String requestParams = Stream.of(m.getParameters())
									.filter(p -> p.isAnnotationPresent(RequestParam.class)).map(Parameter::getName)
									.collect(Collectors.joining(","));
							// OJO AQUI que hay que cambiar new Link por Link.of, por un problema de versiones
							searchResource.add(Link.of(path + "{?" + requestParams + "}", m.getName()));
						} catch (URISyntaxException e) {
							e.printStackTrace();
						}
					}
				}

				return searchResource;
			}

		};

	}

}
