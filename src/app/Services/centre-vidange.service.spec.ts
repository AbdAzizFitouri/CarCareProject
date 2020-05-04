import { TestBed } from '@angular/core/testing';

import { CentreVidangeService } from './centre-vidange.service';

describe('CentreVidangeService', () => {
  let service: CentreVidangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentreVidangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
