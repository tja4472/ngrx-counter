import {
    createFeatureSelector,
    createSelector,
} from '@ngrx/store';

import * as fromFeatureCounter from './feature-counter';
import * as fromRoot from './root-reducers';

export interface IFeatureState {
    featureCounter: fromFeatureCounter.IState;
}

// ??????????????????????
export interface IState extends fromRoot.IRootState {
    'featureA': IFeatureState;
}

export const reducers = {
    featureCounter: fromFeatureCounter.reducer,
};

export const selectFeature = createFeatureSelector<IFeatureState>('featureName');

export const getFeatureCounter = createSelector(
    selectFeature,
    (state: IFeatureState) => state.featureCounter,
);

export const getCounter = createSelector(
    getFeatureCounter,
    fromFeatureCounter.getCounter,
);
