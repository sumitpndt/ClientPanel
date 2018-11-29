import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricetemplateComponent } from './pricetemplate.component';

describe('PricetemplateComponent', () => {
  let component: PricetemplateComponent;
  let fixture: ComponentFixture<PricetemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricetemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
