import { TestBed } from '@angular/core/testing';

import { PokesignService } from './pokesign.service';

describe('PokesignService', () => {
  let service: PokesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
