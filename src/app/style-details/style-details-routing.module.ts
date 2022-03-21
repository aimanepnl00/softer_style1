import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StyleDetailsPage } from './style-details.page';

const routes: Routes = [
  {
    path: '',
    component: StyleDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StyleDetailsPageRoutingModule {}
