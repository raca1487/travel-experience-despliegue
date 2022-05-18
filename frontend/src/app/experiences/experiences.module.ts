import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ViajesComponent } from './viajes/viajes.component';
import { ViajeComponent } from './viajes/viaje/viaje.component';
import { ValoracionesComponent } from './valoraciones/valoraciones.component';
import { ValoracionFormComponent } from './valoraciones/valoracion-form/valoracion-form.component';




@NgModule({
  declarations: [
    ExperiencesComponent,
    ViajesComponent,
    ViajeComponent,
    ValoracionesComponent,
    ValoracionFormComponent
  ],
  imports: [
    CommonModule,
    ExperiencesRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class ExperiencesModule { }
