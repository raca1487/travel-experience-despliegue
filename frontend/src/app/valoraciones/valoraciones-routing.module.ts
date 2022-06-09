import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValoracionFormComponent } from './valoracion-form/valoracion-form.component';
import { ValoracionComponent } from './valoracion/valoracion.component';

const routes: Routes = [
  {
    path:'viaje',
    component: ValoracionComponent
  },
  {
    path: 'viaje/:id/valoracion-form',
    component: ValoracionFormComponent
  },
  {
    path: 'actividad',
    component: ValoracionComponent
  },
  {
    path: 'actividad/:id/valoracion-form',
    component: ValoracionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValoracionesRoutingModule { }
