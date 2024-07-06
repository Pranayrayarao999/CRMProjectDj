import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFairComponent } from './job-fair.component';

describe('JobFairComponent', () => {
  let component: JobFairComponent;
  let fixture: ComponentFixture<JobFairComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobFairComponent]
    });
    fixture = TestBed.createComponent(JobFairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
