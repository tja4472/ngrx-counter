import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

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

// export const metaReducers: Array<ActionReducer<any, any>> = [storeFreeze];
export const metaReducers: Array<MetaReducer<IRootState>> = [storeFreeze];

/**
 * CounterB Reducers
 */
// export const getCounterBState = createFeatureSelector<fromCounterB.IState>('counterB');
export const getCounterBState = (state: IRootState) => state.counterB;

export const getCounterB = createSelector(
    getCounterBState,
    fromCounterB.getCounter,
);
