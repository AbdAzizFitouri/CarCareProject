import { TestBed } from '@angular/core/testing';

import { ModeleService } from './modele-service';

describe('ModeleServiceService', () => {
  let service: ModeleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
