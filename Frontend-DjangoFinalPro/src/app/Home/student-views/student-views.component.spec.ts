import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewsComponent } from './student-views.component';

describe('StudentViewsComponent', () => {
  let component: StudentViewsComponent;
  let fixture: ComponentFixture<StudentViewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentViewsComponent]
    });
    fixture = TestBed.createComponent(StudentViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
