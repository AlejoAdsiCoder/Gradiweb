import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListWeatherComponent } from './list-weather.component';

describe('ListWeatherComponent', () => {
  let component: ListWeatherComponent;
  let fixture: ComponentFixture<ListWeatherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
