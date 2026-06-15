import { TestBed } from '@angular/core/testing';

import { ApichService } from './apich.service';

describe('ApichService', () => {
  let service: ApichService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApichService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
