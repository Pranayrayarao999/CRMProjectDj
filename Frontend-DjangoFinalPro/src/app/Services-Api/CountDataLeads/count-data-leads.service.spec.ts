import { TestBed } from '@angular/core/testing';

import { CountDataLeadsService } from './CountDataLeads/count-data-leads.service';

describe('CountDataLeadsService', () => {
  let service: CountDataLeadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountDataLeadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
