import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesterdayDataComponent } from './yesterday-data.component';

describe('YesterdayDataComponent', () => {
  let component: YesterdayDataComponent;
  let fixture: ComponentFixture<YesterdayDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YesterdayDataComponent]
    });
    fixture = TestBed.createComponent(YesterdayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
