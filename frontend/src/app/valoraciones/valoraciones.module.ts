import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValoracionesRoutingModule } from './valoraciones-routing.module';
import { ValoracionComponent } from './valoracion/valoracion.component';
import { ValoracionFormComponent } from './valoracion-form/valoracion-form.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ValoracionComponent,
    ValoracionFormComponent
  ],
  imports: [
    CommonModule,
    ValoracionesRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    ValoracionComponent,
    ValoracionFormComponent
  ]
})
export class ValoracionesModule { }
