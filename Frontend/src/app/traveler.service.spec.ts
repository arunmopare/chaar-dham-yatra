import { TestBed } from '@angular/core/testing';

import { TravelerService } from './traveler.service';

describe('TravelerService', () => {
  let service: TravelerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
