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
        path: 'explorar',
        loadChildren: () => import('../explorar/explorar.module').then( m => m.ExplorarPageModule)
      },
      {
        path: 'crear',
        loadChildren: () => import('../crear/crear.module').then( m => m.CrearPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../chat/chat.module').then( m => m.ChatPageModule)
      },
      {
        path: 'mensajes',
        loadChildren: () => import('../mensajes/mensajes.module').then( m => m.MensajesPageModule)
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
