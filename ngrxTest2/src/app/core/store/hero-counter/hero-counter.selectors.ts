import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { HeroCounterState } from './hero-counter.state';
import { heroCounterStoreName } from './hero-counter.store.module';

// FEATURE SELECTOR
// appState -> featureState
export const selectHeroCounterState: MemoizedSelector<object, HeroCounterState> = createFeatureSelector<HeroCounterState>(heroCounterStoreName);

// PROJECTORS
// state -> stateSlice
export const getValue = (state: HeroCounterState): number => state.value;
export const getInverseValue = (state: HeroCounterState): number => state.inverseValue;

// SELECTORS
// feature selector + projector -> featureStateSlice
export const selectHeroCounterValue: MemoizedSelector<object, number> = createSelector(selectHeroCounterState, getValue);
export const selectHerocounterInverseValue: MemoizedSelector<object, number> = createSelector(selectHeroCounterState, getInverseValue);
