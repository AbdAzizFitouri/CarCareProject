import { TestBed } from '@angular/core/testing';

import { CentreVisiteService } from './centre-visite.service';

describe('CentreVisiteService', () => {
  let service: CentreVisiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentreVisiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
