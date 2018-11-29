import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MileageTariffComponent } from './mileage-tariff.component';

describe('MileageTariffComponent', () => {
  let component: MileageTariffComponent;
  let fixture: ComponentFixture<MileageTariffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MileageTariffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MileageTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
