import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StyleDetailsPageRoutingModule } from './style-details-routing.module';

import { StyleDetailsPage } from './style-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StyleDetailsPageRoutingModule
  ],
  declarations: [StyleDetailsPage]
})
export class StyleDetailsPageModule {}
