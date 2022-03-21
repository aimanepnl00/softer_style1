import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./style/style.module').then( m => m.StylePageModule)
  },
  {
    path: '',
    redirectTo: 'style',
    pathMatch: 'full'
  },
  {
    path: 'style',
    loadChildren: () => import('./style/style.module').then( m => m.StylePageModule)
  },
  {
    path: 'style-details',
    loadChildren: () => import('./style-details/style-details.module').then( m => m.StyleDetailsPageModule)
  },
  {
    path: 'add-style',
    loadChildren: () => import('./add-style/add-style.module').then( m => m.AddStylePageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
