import { map } from 'rxjs/operators';
import { loadDashboards } from './../../+store/dashboard.actions';
import { Observable, Subscription } from 'rxjs';
import { DashboardState } from './../../+store/dashboard.reducer';
import { Logger } from '@core/services/logger.service';
import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import * as fromSelector from '../../+store/dashboard.selectors';

const log = new Logger('ViewComponent');

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  todo$: Observable<DashboardState>;
  IsCompleted = false;

  constructor(private store: Store<{ data: DashboardState }>) {
    this.todo$ = store.select(fromSelector.getDataState);
  }

  ngOnInit(): void {
    this.store.dispatch(loadDashboards());
  }

}
