import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as icons from '@app/config/icons.json';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show list of icons' + JSON.stringify(icons.default), () => {
    const list = [];
    console.log('===================> ', icons);
    for (const item of icons.default) {
      list.push(item.name);
    }
    console.log('===================> ', list);
    expect(list).toBeGreaterThan(0);
  });
});
