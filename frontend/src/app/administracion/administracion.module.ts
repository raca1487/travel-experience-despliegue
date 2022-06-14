import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioFichaComponent } from './usuarios/usuario-ficha/usuario-ficha.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioFormComponent,
    UsuariosComponent,
    UsuarioFichaComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule
  ]
})
export class AdministracionModule { }
