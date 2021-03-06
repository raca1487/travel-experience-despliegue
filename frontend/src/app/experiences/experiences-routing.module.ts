import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadComponent } from './actividades/actividad/actividad.component';
import { ExperiencesActividadesComponent } from './experiences-actividades/experiences-actividades.component';
import { ExperiencesViajesComponent } from './experiences-viajes/experiences-viajes.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ViajeComponent } from './viajes/viaje/viaje.component';

const routes: Routes = [
  {
    path: '',
    component: ExperiencesComponent
  },
  {
    path: 'viajes',
    component: ExperiencesViajesComponent
  },
  {
    path: 'actividades',
    component: ExperiencesActividadesComponent
  },
  {
    path: 'viaje/:id',
    component: ViajeComponent
  },
  {
    path: 'actividad/:id',
    component: ActividadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencesRoutingModule { }
