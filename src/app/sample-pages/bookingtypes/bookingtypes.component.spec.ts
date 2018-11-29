import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingtypesComponent } from './bookingtypes.component';

describe('BookingtypesComponent', () => {
  let component: BookingtypesComponent;
  let fixture: ComponentFixture<BookingtypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingtypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
