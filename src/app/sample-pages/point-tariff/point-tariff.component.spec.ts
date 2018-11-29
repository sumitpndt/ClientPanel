import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointTariffComponent } from './point-tariff.component';

describe('PointTariffComponent', () => {
  let component: PointTariffComponent;
  let fixture: ComponentFixture<PointTariffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointTariffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
