package es.diverplan.rest;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

public class Mixins {

	@JsonPropertyOrder({ "id", "nombre", "fechaSalida", "numeroNoches", "precioTotal" })
	@JsonIgnoreProperties(value = { "descripcion" })
	public static interface ViajeConId {

		@JsonProperty("nombre")
		abstract String getTitulo();
		
		@JsonProperty("numeroNoches")
		abstract int getDuracionViaje();

		@JsonProperty("precioTotal")
		abstract float getPrecio();

	}

	@JsonPropertyOrder({ "id", "fechaPublicacion", "comentario", "puntuacion", "viaje" })
//	@JsonIgnoreProperties(value = { "comentario" })
	public static interface ValoracionConId {

		@JsonProperty("viaje")
		abstract ViajeConId getViaje();
	}

}
