import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmLeadsDataComponent } from './warm-leads-data.component';

describe('WarmLeadsDataComponent', () => {
  let component: WarmLeadsDataComponent;
  let fixture: ComponentFixture<WarmLeadsDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarmLeadsDataComponent]
    });
    fixture = TestBed.createComponent(WarmLeadsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
