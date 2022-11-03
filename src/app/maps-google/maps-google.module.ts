import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapsGooglePageRoutingModule } from './maps-google-routing.module';

import { MapsGooglePage } from './maps-google.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsGooglePageRoutingModule
  ],
  declarations: [MapsGooglePage]
})
export class MapsGooglePageModule {}
