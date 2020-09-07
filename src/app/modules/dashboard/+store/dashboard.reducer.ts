import { createReducer, on } from '@ngrx/store';
import { DashboardModel } from '@shared/models/dashboard/dashboard-model';

import { loadDashboards, loadDashboardsSuccess, loadDashboardsFailure } from './dashboard.actions';
import { DashboardModule } from '../dashboard.module';

export const dashboardFeatureKey = 'dashboard';

export interface DashboardState {
  model: DashboardModel;
  error: Error;
}

export const initialState: DashboardState = {
  model: { element1: 'pepe' } as DashboardModel,
  error: null
};


export const reducer = createReducer(
  initialState,
  // on(loadDashboards, state => state),
  on(loadDashboardsSuccess, (state: DashboardState, { payload }) => {
    return { ...state, model: payload, error: null };
  }),
  on(loadDashboardsFailure, (state: DashboardState, error: Error) => {
    return { ...state, error };
  })
);

