import { TestBed } from '@angular/core/testing';

import { DeleteLeadsService } from './delete-leads.service';

describe('DeleteLeadsService', () => {
  let service: DeleteLeadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteLeadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
