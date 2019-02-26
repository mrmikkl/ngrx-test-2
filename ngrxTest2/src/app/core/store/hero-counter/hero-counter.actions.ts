import { Action } from '@ngrx/store';

export enum HeroCounterActionTypes {
  INCREMENT = '[Hero Counter] Increment', DECREMENT = '[Hero Counter] Decrement', RESET = '[Hero Counter] Reset'
}

export class Increment implements Action {
  public readonly type = HeroCounterActionTypes.INCREMENT;
}

export class Decrement implements Action {
  public readonly type = HeroCounterActionTypes.DECREMENT;
}

export class Reset implements Action {
  public readonly type = HeroCounterActionTypes.RESET;
}

export type HeroCounterActions = Increment | Decrement | Reset;
