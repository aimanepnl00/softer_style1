import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStylePage } from '../add-style/add-style.page';

import { StylePage } from './style.page';

const routes: Routes = [
  {
    path: '',
    component: StylePage
  },
  {
    path: ':id',
    loadChildren: () => import('../detail/detail.module').then( m => m.DetailPageModule)

    // loadChildren: () => import('../style-details/style-details.module').then( m => m.StyleDetailsPageModule)
  },
  {
    path: 'add-style',
    // loadChildren: () => import('../add-style/add-style.module').then( m => m.AddStylePageModule)
    component: AddStylePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StylePageRoutingModule {}
