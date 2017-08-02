import { Action } from '@ngrx/store';

export const INCREMENT = '[FeatureCounter] Increment';
export const DECREMENT = '[FeatureCounter] Decrement';
export const RESET = '[FeatureCounter] Reset';

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

export const getCounter = (state: IState) => state.counter;
