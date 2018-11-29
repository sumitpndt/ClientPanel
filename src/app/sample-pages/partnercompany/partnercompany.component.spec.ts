import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnercompanyComponent } from './partnercompany.component';

describe('PartnercompanyComponent', () => {
  let component: PartnercompanyComponent;
  let fixture: ComponentFixture<PartnercompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnercompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnercompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
