import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityDataLeadsComponent } from './opportunity-data-leads.component';

describe('OpportunityDataLeadsComponent', () => {
  let component: OpportunityDataLeadsComponent;
  let fixture: ComponentFixture<OpportunityDataLeadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpportunityDataLeadsComponent]
    });
    fixture = TestBed.createComponent(OpportunityDataLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
