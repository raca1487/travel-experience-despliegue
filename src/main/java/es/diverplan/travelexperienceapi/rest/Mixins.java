package es.diverplan.travelexperienceapi.rest;

//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import es.diverplan.travelexperienceapi.entidades.CoordinadorConId;

public class Mixins {

	@JsonPropertyOrder({ "id", "nombre", "descripcion", "fechaSalida", "numeroNoches", "precioTotal" })
	//@JsonIgnoreProperties(value = { "descripcion" })
	public static interface ViajeConId {

		@JsonProperty("nombre")
		abstract String getTitulo();
		
		@JsonProperty("descripcion")
		abstract String getDescripcion();
		
		@JsonProperty("numeroNoches")
		abstract int getDuracionViaje();

		@JsonProperty("precioTotal")
		abstract float getPrecio();

	}
	
	@JsonPropertyOrder({ "id", "nombre", "descripcion", "ciudad", "coordinador" })
	public static interface ActividadConId {
		
		@JsonProperty("nombre")
		abstract String getTitulo();
		
		@JsonProperty("coordinador")
		abstract CoordinadorConId getCoordinador();
	}

	@JsonPropertyOrder({ "id", "titulo", "comentario", "puntuacion", "fechaPublicacion", "experiencia" })
//	@JsonIgnoreProperties(value = { "comentario" })
	public static interface ValoracionConId {

		@JsonProperty("experiencia")
		abstract ViajeConId getEntretenimiento();
	}

}
