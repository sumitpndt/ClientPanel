import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffDiscountComponent } from './tariff-discount.component';

describe('TariffDiscountComponent', () => {
  let component: TariffDiscountComponent;
  let fixture: ComponentFixture<TariffDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TariffDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
