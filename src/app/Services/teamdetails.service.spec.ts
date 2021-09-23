import { TestBed } from '@angular/core/testing';

import { TeamdetailsService } from './teamdetails.service';

describe('TeamdetailsService', () => {
  let service: TeamdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
