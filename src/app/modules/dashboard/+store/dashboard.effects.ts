import { loadDashboards, loadDashboardsSuccess, loadDashboardsFailure } from './dashboard.actions';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardModel } from '@shared/models/dashboard/dashboard-model';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { DashboardService } from '@core/api/dashboard.service';

@Injectable()
export class DashboardEffects {

  constructor(private actions$: Actions, private dashboardService: DashboardService) {
  }

  GetDashboardInfo$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDashboards),
      mergeMap(action =>
        this.dashboardService.getDashboardData().pipe(
          map((data: DashboardModel) => {
            return loadDashboardsSuccess({ payload: data });
          }),
          catchError((error: Error) => {
            return of(loadDashboardsFailure(error));
          })
        )
      )
    )
  );
}
