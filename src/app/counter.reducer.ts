import * as CounterActions from './counter.actions';

export type Action = CounterActions.All;

export type State = number;
/*
export interface State {
    counter: number;
}

export const initialState: State = {
    counter: 0,
}

  export function reducer(state = initialState, action: Action): State {
  switch(action.type) {
    case CounterActions.INCREMENT: {
        console.log('aaa>', state);
      return { ...state, counter: state.counter + 1 };
    }

    case CounterActions.DECREMENT: {
      return { ...state, counter: state.counter - 1 };
    }

    case CounterActions.RESET: {
      return { ...state, counter: action.payload };
    }

    default: {
      return state;
    }
  }
}
*/
export function reducer(state: State = 0, action: Action): State {
  switch (action.type) {
    case CounterActions.INCREMENT: {
      return state + 1;
    }

    case CounterActions.DECREMENT: {
      return state - 1;
    }

    case CounterActions.RESET: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
