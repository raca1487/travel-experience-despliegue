package es.diverplan.travelexperienceapi;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource({ "classpath:config/jackson.properties", "classpath:config/rest.properties" })
@ComponentScan("es.diverplan")
public class ConfiguracionPorJava {

}
