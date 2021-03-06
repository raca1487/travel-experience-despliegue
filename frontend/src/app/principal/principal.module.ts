import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { HomePrincipalComponent } from './home-principal/home-principal.component';
import { ShellPrincipalComponent } from './shell-principal/shell-principal.component';
import { HeaderPrincipalComponent } from './shell-principal/header-principal/header-principal.component';
import { FooterPrincipalComponent } from './shell-principal/footer-principal/footer-principal.component';
import { MainPrincipalComponent } from './shell-principal/main-principal/main-principal.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeBusquedaComponent } from './home-busqueda/home-busqueda.component';
import { BusquedaItemComponent } from './home-busqueda/busqueda-item/busqueda-item.component';


@NgModule({
  declarations: [
    HomePrincipalComponent,
    ShellPrincipalComponent,
    HeaderPrincipalComponent,
    FooterPrincipalComponent,
    MainPrincipalComponent,
    HomeBusquedaComponent,
    BusquedaItemComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class PrincipalModule { }
