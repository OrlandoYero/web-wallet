import { DashboardModel } from '@shared/models/dashboard/dashboard-model';
import { DashboardState } from './dashboard.reducer';
import { createAction, props } from '@ngrx/store';

export const loadDashboards = createAction(
  '[Dashboard] Load Dashboards'
);

export const loadDashboardsSuccess = createAction(
  '[Dashboard] Load Dashboards Success',
  props<{ payload: DashboardModel }>()
);

export const loadDashboardsFailure = createAction(
  '[Dashboard] Load Dashboards Failure',
  props<Error>()
);
