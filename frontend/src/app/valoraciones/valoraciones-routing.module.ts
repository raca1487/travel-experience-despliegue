import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValoracionComponent } from './valoracion/valoracion.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValoracionesRoutingModule { }
