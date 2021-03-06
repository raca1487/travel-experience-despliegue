import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioFichaComponent } from './usuarios/usuario-ficha/usuario-ficha.component';
import { FormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ExperiencesModule } from '../experiences/experiences.module';
import { ValoracionesModule } from '../valoraciones/valoraciones.module';
import { AdminExperiencesComponent } from './admin-experiences/admin-experiences.component';
import { AdminViajesComponent } from './admin-viajes/admin-viajes.component';
import { ViajeFormComponent } from './admin-viajes/viaje-form/viaje-form.component';
import { ViajeItemComponent } from './admin-viajes/viaje-item/viaje-item.component';
import { ViajeModificarComponent } from './admin-viajes/viaje-modificar/viaje-modificar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminActividadesComponent } from './admin-actividades/admin-actividades.component';
import { ActividadFormComponent } from './admin-actividades/actividad-form/actividad-form.component';
import { ActividadItemComponent } from './admin-actividades/actividad-item/actividad-item.component';
import { ActividadModificarComponent } from './admin-actividades/actividad-modificar/actividad-modificar.component';
import { AdminCoordinadoresComponent } from './admin-coordinadores/admin-coordinadores.component';
import { CoordinadorFormComponent } from './admin-coordinadores/coordinador-form/coordinador-form.component';
import { CoordinadorItemComponent } from './admin-coordinadores/coordinador-item/coordinador-item.component';
import { CoordinadorModificarComponent } from './admin-coordinadores/coordinador-modificar/coordinador-modificar.component';
import { CoordinadoresComponent } from './admin-coordinadores/coordinadores/coordinadores.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioFormComponent,
    UsuariosComponent,
    UsuarioFichaComponent,
    AdminHomeComponent,
    AdminExperiencesComponent,
    AdminViajesComponent,
    ViajeFormComponent,
    ViajeItemComponent,
    ViajeModificarComponent,
    AdminActividadesComponent,
    ActividadFormComponent,
    ActividadItemComponent,
    ActividadModificarComponent,
    AdminCoordinadoresComponent,
    CoordinadorFormComponent,
    CoordinadorItemComponent,
    CoordinadorModificarComponent,
    CoordinadoresComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class AdministracionModule { }
