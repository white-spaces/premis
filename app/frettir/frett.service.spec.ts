import { TestBed } from '@angular/core/testing';

import { FrettService } from './frett.service';

describe('FrettService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrettService = TestBed.get(FrettService);
    expect(service).toBeTruthy();
  });
});
