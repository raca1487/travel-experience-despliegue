package es.diverplan.travelexperienceapi;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import com.fasterxml.jackson.databind.ObjectMapper;

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
		mapper.addMixIn(ValoracionConId.class, Mixins.ValoracionConId.class);

		return mapper;
	}

}
