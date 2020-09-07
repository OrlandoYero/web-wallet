import { loadDashboards } from './../../+store/dashboard.actions';
import { Observable, Subscription } from 'rxjs';
import { DashboardState } from './../../+store/dashboard.reducer';
import { Logger } from '@core/services/logger.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromSelector from '../../+store/dashboard.selectors';

const log = new Logger('ViewComponent');

import * as CanvasJS from '../../../../../assets/js/canvasjs.min';

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

    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Basic Column Chart in Angular'
      },
      data: [{
        type: 'column',
        dataPoints: [
          { y: 71, label: 'Apple' },
          { y: 55, label: 'Mango' },
          { y: 50, label: 'Orange' },
          { y: 65, label: 'Banana' },
          { y: 95, label: 'Pineapple' },
          { y: 68, label: 'Pears' },
          { y: 28, label: 'Grapes' },
          { y: 34, label: 'Lychee' },
          { y: 14, label: 'Jackfruit' }
        ]
      }]
    });

    chart.render();
  }

}
