import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TemperatureTwoComponent } from './temperature-two.component';

describe('TemperatureTwoComponent', () => {
  let component: TemperatureTwoComponent;
  let fixture: ComponentFixture<TemperatureTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
