import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyRateTariffComponent } from './hourly-rate-tariff.component';

describe('HourlyRateTariffComponent', () => {
  let component: HourlyRateTariffComponent;
  let fixture: ComponentFixture<HourlyRateTariffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyRateTariffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyRateTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
