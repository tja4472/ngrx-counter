import {
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
} from '@ngrx/store';

import * as fromCounterA from './counter.reducer';
import * as fromCounterB from './counterB';

export interface IRootState {
    counterA: fromCounterA.IState;
    counterB: fromCounterB.IState;
}

export const rootReducers: ActionReducerMap<IRootState> = {
    counterA: fromCounterA.reducer,
    counterB: fromCounterB.reducer,
};

/**
 * CounterB Reducers
 */
export const getCounterBState = createFeatureSelector<fromCounterB.IState>('counterB');

export const getCounterB = createSelector(
    getCounterBState,
    fromCounterB.getCounter,
);
