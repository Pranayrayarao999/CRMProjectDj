import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptedLeadsDataComponent } from './attempted-leads-data.component';

describe('AttemptedLeadsDataComponent', () => {
  let component: AttemptedLeadsDataComponent;
  let fixture: ComponentFixture<AttemptedLeadsDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttemptedLeadsDataComponent]
    });
    fixture = TestBed.createComponent(AttemptedLeadsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
