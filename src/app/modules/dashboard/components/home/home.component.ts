import { Component, OnInit } from '@angular/core';

import { Logger } from '@core/services/logger.service';

const log = new Logger('HomeComponent');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    log.debug('Starting component');
  }

}
