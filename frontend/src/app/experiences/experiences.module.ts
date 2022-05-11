import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ViajesComponent } from './viajes/viajes.component';
import { ViajeComponent } from './viajes/viaje/viaje.component';



@NgModule({
  declarations: [
    ExperiencesComponent,
    ViajesComponent,
    ViajeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ExperiencesRoutingModule
  ]
})
export class ExperiencesModule { }
