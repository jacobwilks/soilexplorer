import { TestBed } from '@angular/core/testing';

import { AdventureTimeService } from './adventure-time.service';

describe('AdventureTimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdventureTimeService = TestBed.get(AdventureTimeService);
    expect(service).toBeTruthy();
  });
});
