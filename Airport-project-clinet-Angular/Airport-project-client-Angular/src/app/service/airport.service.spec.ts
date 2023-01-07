import { TestBed } from '@angular/core/testing';

import { AirportServiceService } from './airport.service';

describe('AirportServiceService', () => {
  let service: AirportServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirportServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
