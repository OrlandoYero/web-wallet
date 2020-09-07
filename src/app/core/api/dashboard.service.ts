import { Observable, of } from 'rxjs';
import { DashboardModel } from '@shared/models/dashboard/dashboard-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getDashboardData(): Observable<DashboardModel> {
    return of({ element1: 25 } as DashboardModel);
  }
}
