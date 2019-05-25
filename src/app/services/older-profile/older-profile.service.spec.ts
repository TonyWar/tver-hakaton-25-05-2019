import { TestBed } from '@angular/core/testing';

import { OlderProfileService } from './older-profile.service';

describe('OlderProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OlderProfileService = TestBed.get(OlderProfileService);
    expect(service).toBeTruthy();
  });
});
