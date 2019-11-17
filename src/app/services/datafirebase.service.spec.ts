import { TestBed } from '@angular/core/testing';

import { DatafirebaseService } from './datafirebase.service';

describe('DatafirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatafirebaseService = TestBed.get(DatafirebaseService);
    expect(service).toBeTruthy();
  });
});
