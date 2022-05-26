import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValoracionFormComponent } from './valoracion-form/valoracion-form.component';
import { ValoracionesComponent } from './valoraciones/valoraciones.component';

const routes: Routes = [
  {
    path:'viaje',
    component: ValoracionesComponent
  },
  {
    path: 'viaje/:id/valoracion-form',
    component: ValoracionFormComponent
  },
  {
    path: 'actividad',
    component: ValoracionesComponent
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
