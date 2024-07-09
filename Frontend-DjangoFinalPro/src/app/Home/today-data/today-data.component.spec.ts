import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayDataComponent } from './today-data.component';

describe('TodayDataComponent', () => {
  let component: TodayDataComponent;
  let fixture: ComponentFixture<TodayDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayDataComponent]
    });
    fixture = TestBed.createComponent(TodayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
