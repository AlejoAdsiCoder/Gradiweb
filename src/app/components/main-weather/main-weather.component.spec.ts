import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainWeatherComponent } from './main-weather.component';

describe('MainWeatherComponent', () => {
  let component: MainWeatherComponent;
  let fixture: ComponentFixture<MainWeatherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
