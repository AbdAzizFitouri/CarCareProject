import { TestBed } from '@angular/core/testing';

import { StationPneumatiqueService } from './station-pneumatique.service';

describe('StationPneumatiqueService', () => {
  let service: StationPneumatiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationPneumatiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
