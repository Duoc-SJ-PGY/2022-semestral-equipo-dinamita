import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { UsuarioPage } from '../usuario/usuario.page';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children:[
      {
        path: 'usuario',
        loadChildren: () => import('../usuario/usuario.module').then( m => m.UsuarioPageModule)
      },
      {
        path: '',
        redirectTo:'/inicio/inicio',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: '',
    redirectTo:'/inicio/inicio',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
