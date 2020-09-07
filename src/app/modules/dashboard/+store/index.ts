import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromDashboard from './dashboard.reducer';

import { environment } from '@env/environment';

export const dashboardFeatureKey = 'dashboard';

export interface State {
  data: fromDashboard.DashboardState;
}

export const reducers: ActionReducerMap<State> = {
  data: fromDashboard.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
