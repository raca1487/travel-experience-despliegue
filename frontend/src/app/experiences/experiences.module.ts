import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ViajesComponent } from './viajes/viajes.component';
import { ViajeComponent } from './viajes/viaje/viaje.component';
import { ValoracionesComponent } from './valoraciones/valoraciones.component';
import { ValoracionFormComponent } from './valoraciones/valoracion-form/valoracion-form.component';
import { FormsModule } from '@angular/forms';



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
    FontAwesomeModule,
    ExperiencesRoutingModule,
    FormsModule
  ]
})
export class ExperiencesModule { }
