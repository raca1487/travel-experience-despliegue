import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValoracionesRoutingModule } from './valoraciones-routing.module';
import { ValoracionComponent } from './valoracion/valoracion.component';


@NgModule({
  declarations: [
    ValoracionComponent
  ],
  imports: [
    CommonModule,
    ValoracionesRoutingModule
  ],
  exports: [
    ValoracionComponent
  ]
})
export class ValoracionesModule { }
