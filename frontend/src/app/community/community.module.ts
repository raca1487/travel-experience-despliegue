import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { ContactoComponent } from './contacto/contacto.component';
import { CoordinadoresComponent } from './coordinadores/coordinadores.component';
import { CoordinadorFormComponent } from './coordinadores/coordinador-form/coordinador-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactoComponent,
    CoordinadoresComponent,
    CoordinadorFormComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class CommunityModule { }
