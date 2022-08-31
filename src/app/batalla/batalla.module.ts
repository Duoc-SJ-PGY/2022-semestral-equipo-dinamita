import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BatallaPageRoutingModule } from './batalla-routing.module';

import { BatallaPage } from './batalla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BatallaPageRoutingModule
  ],
  declarations: [BatallaPage]
})
export class BatallaPageModule {}
