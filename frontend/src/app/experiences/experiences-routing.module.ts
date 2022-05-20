import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ValoracionFormComponent } from './valoraciones/valoracion-form/valoracion-form.component';
import { ViajeFormComponent } from './viajes/viaje-form/viaje-form.component';
import { ViajeComponent } from './viajes/viaje/viaje.component';

const routes: Routes = [
  {
    path: '',
    component: ExperiencesComponent
  },
  {
    path: 'viaje',
    component: ViajeComponent
  },
  {
    path: 'viaje-form',
    component: ViajeFormComponent
  },
  {
    path: 'viaje/formulario',
    component: ValoracionFormComponent
  },
  {
    path: 'viaje/:id',
    component: ViajeComponent
  },
  {
    path: 'viaje/:id/formulario',
    component: ValoracionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencesRoutingModule { }
