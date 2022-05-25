import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValoracionesRoutingModule } from './valoraciones-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ValoracionesComponent } from './valoraciones/valoraciones.component';
import { ValoracionFormComponent } from './valoracion-form/valoracion-form.component';


@NgModule({
  declarations: [
    ValoracionesComponent,
    ValoracionFormComponent
  ],
  imports: [
    CommonModule,
    ValoracionesRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    ValoracionesComponent,
    ValoracionFormComponent
  ]
})
export class ValoracionesModule { }
