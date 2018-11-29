import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingclassesComponent } from './bookingclasses.component';

describe('BookingclassesComponent', () => {
  let component: BookingclassesComponent;
  let fixture: ComponentFixture<BookingclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
