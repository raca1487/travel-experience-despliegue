import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBusquedaComponent } from './home-busqueda/home-busqueda.component';
import { HomePrincipalComponent } from './home-principal/home-principal.component';
import { ShellPrincipalComponent } from './shell-principal/shell-principal.component';

const routes: Routes = [
  {
    path: '',
    component: ShellPrincipalComponent,
    children: [
      {
        path: '',
        component: HomePrincipalComponent
      },
      {
        path: 'experiences',
        loadChildren: () => import('../experiences/experiences.module').then((m) => m.ExperiencesModule)
      },
      {
        path: 'community',
        loadChildren: () => import('../community/community.module').then((m) => m.CommunityModule)
      },
      {
        path: 'busqueda',
        component: HomeBusquedaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalRoutingModule {}
