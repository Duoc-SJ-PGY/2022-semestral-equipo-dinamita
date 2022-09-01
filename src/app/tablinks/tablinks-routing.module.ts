import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children:[
      {
        path: 'inicio',
        loadChildren:() => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'quests',
        loadChildren:() => import('../quests/quests.module').then(m => m.QuestsPageModule)
      },
      {
        path: 'play',
        loadChildren:() => import('../play/play.module').then(m => m.PlayPageModule)
      },
      {
        path: 'batalla',
        loadChildren:() => import('../batalla/batalla.module').then(m => m.BatallaPageModule)
      },
      {
        path: 'personaje',
        loadChildren:() => import('../personaje/personaje.module').then(m => m.PersonajePageModule)
      },
      {
        path: '',
        redirectTo:'/tablinks/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo:'/tablinks/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
