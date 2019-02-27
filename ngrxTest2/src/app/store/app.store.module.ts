import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCounterStoreModule } from './hero-counter';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const appStoreComponents = [];

export const appStoreProviders = [];

@NgModule({
  imports:      [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HeroCounterStoreModule,
    StoreDevtoolsModule.instrument()
  ],
  providers:    appStoreProviders,
  declarations: appStoreComponents
})
export class AppStoreModule {}
