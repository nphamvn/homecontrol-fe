import { TestBed } from '@angular/core/testing';

import { DevicesControService } from './devices-contro.service';

describe('DevicesControService', () => {
  let service: DevicesControService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicesControService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
