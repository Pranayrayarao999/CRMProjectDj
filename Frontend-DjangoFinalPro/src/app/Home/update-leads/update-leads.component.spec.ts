import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeadsComponent } from './update-leads.component';

describe('UpdateLeadsComponent', () => {
  let component: UpdateLeadsComponent;
  let fixture: ComponentFixture<UpdateLeadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLeadsComponent]
    });
    fixture = TestBed.createComponent(UpdateLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
