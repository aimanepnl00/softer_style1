import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStylePageRoutingModule } from './add-style-routing.module';

import { AddStylePage } from './add-style.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStylePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddStylePage]
})
export class AddStylePageModule {}
