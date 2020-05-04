import { TestBed } from '@angular/core/testing';

import { CentreAssuranceService } from './centre-assurance.service';

describe('CentreAssuranceService', () => {
  let service: CentreAssuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentreAssuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
