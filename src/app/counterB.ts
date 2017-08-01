import { Action } from '@ngrx/store';

export const INCREMENT = '[CounterB] Increment';
export const DECREMENT = '[CounterB] Decrement';
export const RESET = '[CounterB] Reset';

export class Increment implements Action {
    public readonly type = INCREMENT;
}

// tslint:disable-next-line:max-classes-per-file
export class Decrement implements Action {
    public readonly type = DECREMENT;
}

// tslint:disable-next-line:max-classes-per-file
export class Reset implements Action {
    public readonly type = RESET;

    constructor(public payload: number) { }
}

export type Actions
    = Increment
    | Decrement
    | Reset;

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
            console.log('aaa>', state);
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
