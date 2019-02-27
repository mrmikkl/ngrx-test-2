import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCounterStoreModule } from './hero-counter';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

export const featureStores = [
  HeroCounterStoreModule
];

export const appStoreComponents = [];

export const appStoreProviders = [];

@NgModule({
  imports:      [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    ...featureStores
  ],
  providers:    appStoreProviders,
  declarations: appStoreComponents
})
export class AppStoreModule {}
