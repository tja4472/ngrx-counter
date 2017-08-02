import { Action } from '@ngrx/store';

export const INCREMENT = '[CounterB] Increment';
export const DECREMENT = '[CounterB] Decrement';
export const RESET = '[CounterB] Reset';

export class IncrementAction implements Action {
    public readonly type = INCREMENT;
}

// tslint:disable-next-line:max-classes-per-file
export class DecrementAction implements Action {
    public readonly type = DECREMENT;
}

// tslint:disable-next-line:max-classes-per-file
export class ResetActions implements Action {
    public readonly type = RESET;

    constructor(public payload: number) { }
}

export type Actions
    = IncrementAction
    | DecrementAction
    | ResetActions;

/********************
 * Reducer
 *******************/
export interface IState {
    counter: number;
}

export const initialState: IState = {
    counter: 0,
};

export function reducer(
    state = initialState,
    action: Actions): IState {
    switch (action.type) {
        case INCREMENT: {
            return { ...state, counter: state.counter + 1 };
        }

        case DECREMENT: {
            return { ...state, counter: state.counter - 1 };
        }

        case RESET: {
            return { ...state, counter: action.payload };
        }

        default: {
            return state;
        }
    }
}

// standard.
// export const getCounter = (state: IState) => state.counter;

// debugging.
// getCounter should only be called if state changes.
// createSelector() not memoizing correctly
// https://github.com/ngrx/platform/issues/226
let lastState: IState;
export const getCounter = (state: IState) => {
    console.log('counterB:Projector called, parameter changed: ', !(lastState === state));
    lastState = state;
    return state.counter;
};
