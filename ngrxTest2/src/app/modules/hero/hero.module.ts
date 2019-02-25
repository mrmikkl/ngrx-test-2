import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroRoutingModule } from './hero.routing.module';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { HeroIncrementorComponent } from './components/hero-incrementor/hero.incrementor.component';
import { FormsModule } from '@angular/forms';

export const heroComponents = [
  HeroListComponent,
  HeroIncrementorComponent
];

export const heroProviders = [];

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  providers:    heroProviders,
  declarations: heroComponents
})
export class HeroModule {}
