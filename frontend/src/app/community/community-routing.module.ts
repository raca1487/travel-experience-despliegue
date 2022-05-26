import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { CoordinadorFormComponent } from './coordinadores/coordinador-form/coordinador-form.component';
import { CoordinadoresComponent } from './coordinadores/coordinadores.component';

const routes: Routes = [
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'trabaja-con-nosotros',
    component: CoordinadoresComponent
  },
  {
    path: 'trabaja-con-nosotros/formulario',
    component: CoordinadorFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
