import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyTariffComponent } from './journey-tariff.component';

describe('JourneyTariffComponent', () => {
  let component: JourneyTariffComponent;
  let fixture: ComponentFixture<JourneyTariffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyTariffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneyTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
