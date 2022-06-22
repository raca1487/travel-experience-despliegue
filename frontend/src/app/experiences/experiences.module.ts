import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ViajesComponent } from './viajes/viajes.component';
import { ViajeComponent } from './viajes/viaje/viaje.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActividadesComponent } from './actividades/actividades.component';
import { ActividadComponent } from './actividades/actividad/actividad.component';
import { CommunityModule } from '../community/community.module';
import { ValoracionesModule } from '../valoraciones/valoraciones.module';
import { ExperiencesViajesComponent } from './experiences-viajes/experiences-viajes.component';
import { ExperiencesActividadesComponent } from './experiences-actividades/experiences-actividades.component';


@NgModule({
  declarations: [
    ExperiencesComponent,
    ViajesComponent,
    ViajeComponent,
    ActividadesComponent,
    ActividadComponent,
    ExperiencesViajesComponent,
    ExperiencesActividadesComponent
  ],
  imports: [
    CommonModule,
    ExperiencesRoutingModule,
    FontAwesomeModule,
    CommunityModule,
    ValoracionesModule
  ]
})
export class ExperiencesModule { }
