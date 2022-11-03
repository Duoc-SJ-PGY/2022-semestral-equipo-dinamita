import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesPage } from './mensajes.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesPage
  },
  {
    path: 'inicio',
    redirectTo: '/tablinks/inicio', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesPageRoutingModule {}
