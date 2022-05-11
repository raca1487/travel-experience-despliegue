import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ViajeComponent } from './viajes/viaje/viaje.component';
import { ViajesComponent } from './viajes/viajes.component';

const routes: Routes = [
  {
    path: '',
    component: ExperiencesComponent
  },
  {
    path: 'viajes',
    component: ViajesComponent
  },
  {
    path: 'viaje',
    component: ViajeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencesRoutingModule { }
