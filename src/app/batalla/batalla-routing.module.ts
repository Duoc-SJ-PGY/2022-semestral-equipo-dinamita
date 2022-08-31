import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatallaPage } from './batalla.page';

const routes: Routes = [
  {
    path: '',
    component: BatallaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatallaPageRoutingModule {}
