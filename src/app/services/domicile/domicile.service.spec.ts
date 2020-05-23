import { TestBed } from '@angular/core/testing';

import { DomicileService } from './domicile.service';

describe('DomicileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomicileService = TestBed.get(DomicileService);
    expect(service).toBeTruthy();
  });
});
