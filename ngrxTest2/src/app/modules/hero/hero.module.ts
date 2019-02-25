import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroRoutingModule } from './hero.routing.module';
import { HeroListComponent } from './pages/hero-list/hero-list.component';

export const heroComponents = [
  HeroListComponent
];

export const heroProviders = [];

@NgModule({
  imports:      [
    CommonModule,
    HeroRoutingModule
  ],
  providers:    heroProviders,
  declarations: heroComponents
})
export class HeroModule {}
