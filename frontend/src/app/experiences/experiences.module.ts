import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FormsModule } from '@angular/forms';
import { ViajesComponent } from './viajes/viajes.component';
import { ViajeComponent } from './viajes/viaje/viaje.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViajeFormComponent } from './viajes/viaje-form/viaje-form.component';
import { ValoracionesModule } from '../valoraciones/valoraciones.module';


@NgModule({
  declarations: [
    ExperiencesComponent,
    ViajesComponent,
    ViajeComponent,
    ViajeFormComponent
  ],
  imports: [
    CommonModule,
    ExperiencesRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ValoracionesModule
  ]
})
export class ExperiencesModule { }
