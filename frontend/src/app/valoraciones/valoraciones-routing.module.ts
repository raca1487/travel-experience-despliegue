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
    path: 'valoracion-form/viaje/:id',
    component: ValoracionFormComponent
  },
  {
    path: 'actividad',
    component: ValoracionComponent
  },
  {
    path: 'valoracion-form/actividad/:id',
    component: ValoracionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValoracionesRoutingModule { }
