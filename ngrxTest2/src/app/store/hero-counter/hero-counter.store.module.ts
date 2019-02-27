import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { heroCounterReducer } from './hero-counter.reducer';
import { HeroCounterEffects } from './hero-counter.effects';
import { EffectsModule } from '@ngrx/effects';

export const heroCounterStoreName = 'heroCounter';

export const heroCounterStoreComponents = [];

export const heroCounterStoreProviders = [HeroCounterEffects];

@NgModule({
  imports:      [
    CommonModule,
    StoreModule.forFeature(heroCounterStoreName, heroCounterReducer),
    EffectsModule.forFeature([HeroCounterEffects])
  ],
  providers:    heroCounterStoreProviders,
  declarations: heroCounterStoreComponents
})
export class HeroCounterStoreModule {}
