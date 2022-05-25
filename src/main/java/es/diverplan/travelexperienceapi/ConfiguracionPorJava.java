package es.diverplan.travelexperienceapi;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import es.diverplan.entidades.ActividadConId;
import es.diverplan.entidades.ValoracionConId;
import es.diverplan.entidades.ViajeConId;
import es.diverplan.rest.Mixins;

@Configuration
@PropertySource({ "classpath:config/rest.properties", "classpath:config/jackson.properties" })
@ComponentScan("es.diverplan")
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

}
