import { TestBed } from '@angular/core/testing';

import { GtLeadsDataService } from './Services-Api/GetLeadsData/gt-leads-data.service';

describe('GtLeadsDataService', () => {
  let service: GtLeadsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GtLeadsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
