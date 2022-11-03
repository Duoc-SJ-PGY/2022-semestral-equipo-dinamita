import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapsGooglePage } from './maps-google.page';

const routes: Routes = [
  {
    path: '',
    component: MapsGooglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsGooglePageRoutingModule {}
