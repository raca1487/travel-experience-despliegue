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


@NgModule({
  declarations: [
    ExperiencesComponent,
    ViajesComponent,
    ViajeComponent,
    ActividadesComponent,
    ActividadComponent
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
