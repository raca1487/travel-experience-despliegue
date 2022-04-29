package es.diverplan.rest;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

public class Mixins {

	@JsonPropertyOrder({ "id", "titulo", "fechaSalida", "numeroNoches", "precioTotal" })
	@JsonIgnoreProperties(value = { "descripcion" })
	public static interface ViajeConId {

		@JsonProperty("numeroNoches")
		abstract int getDuracionViaje();

		@JsonProperty("precioTotal")
		abstract float getPrecio();

	}

	@JsonPropertyOrder({ "id", "comentario", "puntuacion", "id_Viaje" })
	@JsonIgnoreProperties(value = { "fechaPublicacion" })
	public static interface ValoracionConId {

		@JsonProperty("id_Viaje")
		abstract ViajeConId getViaje();
	}

}
