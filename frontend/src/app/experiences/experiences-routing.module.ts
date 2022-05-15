import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesComponent } from './experiences/experiences.component';
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
    path: 'viaje/:id',
    component: ViajeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencesRoutingModule { }
