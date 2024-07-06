import { TestBed } from '@angular/core/testing';

import { CreateleadService } from './createlead.service';

describe('CreateleadService', () => {
  let service: CreateleadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateleadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
