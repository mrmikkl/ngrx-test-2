import { HeroCounterState, initialHeroCounterState } from './hero-counter.state';
import { HeroCounterActions, HeroCounterActionTypes } from './hero-counter.actions';

export function heroCounterReducer(state: HeroCounterState = initialHeroCounterState, action: HeroCounterActions): HeroCounterState {
  switch (action.type) {
    case HeroCounterActionTypes.INCREMENT: {
      return {
        ...state,
        value:        state.value + 1,
        inverseValue: state.value - 1
      };
    }
    case HeroCounterActionTypes.DECREMENT: {
      return {
        ...state,
        value:        state.value - 1,
        inverseValue: state.value + 1
      };
    }
    case HeroCounterActionTypes.RESET: {
      return {
        ...state,
        value:        0,
        inverseValue: 0
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
