import { Action } from '@ngrx/store';

export const INCREMENT = '[CounterA] Increment';
export const DECREMENT = '[CounterA] Decrement';
export const RESET = '[CounterA] Reset';

export class IncrementAction implements Action {
  public readonly type = INCREMENT;
}

// tslint:disable-next-line:max-classes-per-file
export class DecrementAction implements Action {
  public readonly type = DECREMENT;
}

// tslint:disable-next-line:max-classes-per-file
export class ResetAction implements Action {
  public readonly type = RESET;

  constructor(public payload: number) { }
}

export type Actions
  = IncrementAction
  | DecrementAction
  | ResetAction;
