import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule)
  },
  {
    path: 'experiences',
    loadChildren: () => import("./experiences/experiences.module").then((m) => m.ExperiencesModule)
  },
  {
    path: 'valoraciones',
    loadChildren: () => import("./valoraciones/valoraciones.module").then((m) => m.ValoracionesModule)
  },
  {
    path: 'community',
    loadChildren: () => import("./community/community.module").then((m) => m.CommunityModule)
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
