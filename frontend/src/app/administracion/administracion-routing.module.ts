import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadFormComponent } from './admin-actividades/actividad-form/actividad-form.component';
import { AdminExperiencesComponent } from './admin-experiences/admin-experiences.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViajeFormComponent } from './admin-viajes/viaje-form/viaje-form.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path:'',
    component: UsuariosComponent
  },
  {
    path: 'formulario',
    component: UsuarioFormComponent
  },
  {
    path: 'home',
    component: AdminHomeComponent
  },
  {
    path: 'experiences',
    component: AdminExperiencesComponent
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
export class AdministracionRoutingModule { }
