import { TestBed } from '@angular/core/testing';

import { GrabService } from './grab.service';

describe('GrabService', () => {
  let service: GrabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
