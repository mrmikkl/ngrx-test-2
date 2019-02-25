import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path:       '',
    redirectTo: 'hero-list',
    pathMatch:  'full'
  },
  {
    path:         'hero-list',
    loadChildren: './modules/hero/hero.module#HeroModule'
  },
  {
    path:         '**',
    loadChildren: './modules/not-found/not-found.module#NotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
