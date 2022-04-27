# Definición de Proyecto Individual

## Descripción
La aplicación permitirá consultar distintos tipos de entretenimiento, basado en **paquetes de viajes** o **actividades *free time*** organizadas por un coordinador.

Al mismo tiempo, cada entretenimiento contendrá una lista de opiniones realizadas por los propios usuarios de las experiencias o bien por los organizadores de la actividad.

En un primer desarrollo, el registro de entretenimientos correrá a cuenta del administrador de la aplicación, pudiendo en desarrollos futuros hacerlo extensivo a todo tipo de usuarios.

Todos los usuarios podrán realizar comentarios de los entretenimentos, al igual que sus consultas, pero únicamente podrán modificar o eliminar aquellos comentarios agregados por el usuario.
El adminisitrador de la aplicación podrá realizar todo tipo de acciones sobre los comentarios y entretenimientos.

Dicha aplicación podrá ser accesible a través de múltiples dispositivos y plataformas. 


## Diagrama de clases de diseño

![Diagrama de Diseño MVP](https://git.institutomilitar.com/raca1487/travel-experience/-/wikis/img/TREX_Diagrama_Clases.png)

**Cumplimiento de requisitos**
1. **Herencia**: Se realizará sobre `Entretenimiento` y sus subtipos (`Viaje` y `Actividad`).
2. **Relación One-To-Many**: Relación entre `Entretenimiento` y `Valoracion`.
3. **Método personalizado**: Obtención de una lista de `Entretenimiento`, obtenidos a partir del cálculo de la media de la valoraciones del mismo, en función de una puntuación concreta pasada como parámetro.
4. **Listado**: Se mostrarán las valoraciones que tenga un `Entretenimiento`, como puede verse en la [Figura 1](#figura-1).
5. **CRUD**: En distinta pantalla a la anterior, se usarán los controles adecuados para realizar el CRUD, mediante el formulario de la [Figura 2](#figura-2).
6. **URLs** del proyecto:
   1. Repositorio proyecto: https://git.institutomilitar.com/raca1487/travel-experience
   1. Librería: https://github.com/raca1487/travel-experience-libreria
7. **Despliegue** en Internet:
   1. API: TBD
   1. Web: TBD

## Interfaz de usuario

### Figura 1:  
![Listado de Valoraciones](https://git.institutomilitar.com/raca1487/proyecto-individual-travel-experience/-/wikis/img/lista2_mockflow.png)

### Figura 2:  
![CRUD de Experiencia](https://git.institutomilitar.com/raca1487/proyecto-individual-travel-experience/-/wikis/img/crud_mockflow.PNG)
