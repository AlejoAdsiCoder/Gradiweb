import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureTwoComponent } from './temperature-two.component';

describe('TemperatureTwoComponent', () => {
  let component: TemperatureTwoComponent;
  let fixture: ComponentFixture<TemperatureTwoComponent>;

  beforeEach(async(() => {
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
