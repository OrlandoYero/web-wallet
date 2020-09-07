import { State } from './index';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStore from '.';

export const getFeatureState = createFeatureSelector<State>(fromStore.dashboardFeatureKey);

export const getDataState = createSelector(
    getFeatureState,
    (state: State) => state.data
);
