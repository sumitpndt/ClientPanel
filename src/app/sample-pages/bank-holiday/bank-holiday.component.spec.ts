import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankHolidayComponent } from './bank-holiday.component';

describe('BankHolidayComponent', () => {
  let component: BankHolidayComponent;
  let fixture: ComponentFixture<BankHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
