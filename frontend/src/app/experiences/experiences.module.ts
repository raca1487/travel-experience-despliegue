import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FormsModule } from '@angular/forms';
import { ViajesComponent } from './viajes/viajes.component';
import { ViajeComponent } from './viajes/viaje/viaje.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViajeFormComponent } from './viajes/viaje-form/viaje-form.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { ActividadComponent } from './actividades/actividad/actividad.component';
import { ActividadFormComponent } from './actividades/actividad-form/actividad-form.component';
import { ViajeItemComponent } from './viajes/viaje-item/viaje-item.component';
import { ViajeModificarComponent } from './viajes/viaje-modificar/viaje-modificar.component';
import { CommunityModule } from '../community/community.module';
import { ValoracionesModule } from '../valoraciones/valoraciones.module';
import { ActividadItemComponent } from './actividades/actividad-item/actividad-item.component';
import { ActividadModificarComponent } from './actividades/actividad-modificar/actividad-modificar.component';


@NgModule({
  declarations: [
    ExperiencesComponent,
    ViajesComponent,
    ViajeComponent,
    ViajeFormComponent,
    ActividadesComponent,
    ActividadComponent,
    ActividadFormComponent,
    ViajeItemComponent,
    ViajeModificarComponent,
    ActividadItemComponent,
    ActividadModificarComponent
  ],
  imports: [
    CommonModule,
    ExperiencesRoutingModule,
    FontAwesomeModule,
    FormsModule,
    CommunityModule,
    ValoracionesModule
  ]
})
export class ExperiencesModule { }
