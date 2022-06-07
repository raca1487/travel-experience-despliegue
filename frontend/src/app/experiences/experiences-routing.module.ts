import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadFormComponent } from './actividades/actividad-form/actividad-form.component';
import { ActividadComponent } from './actividades/actividad/actividad.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ViajeFormComponent } from './viajes/viaje-form/viaje-form.component';
import { ViajeComponent } from './viajes/viaje/viaje.component';

const routes: Routes = [
  {
    path: '',
    component: ExperiencesComponent
  },
  {
    path: 'viaje/:id',
    component: ViajeComponent
  },
  {
    path: 'viaje-form',
    component: ViajeFormComponent
  },
  {
    path: 'viaje-form/:id',
    component: ViajeFormComponent
  },
  {
    path: 'actividad/:id',
    component: ActividadComponent
  },
  {
    path: 'actividad-form',
    component: ActividadFormComponent
  },
  {
    path: 'actividad-form/:id',
    component: ActividadFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencesRoutingModule { }
