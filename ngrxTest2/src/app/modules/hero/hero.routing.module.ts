import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroListComponent } from './pages/hero-list/hero-list.component';

export const routes: Routes = [
  {
    path:      '',
    component: HeroListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule {}
