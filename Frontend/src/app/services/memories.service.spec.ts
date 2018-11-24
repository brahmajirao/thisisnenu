import { TestBed } from '@angular/core/testing';

import { MemoriesService } from './memories.service';

describe('MemoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemoriesService = TestBed.get(MemoriesService);
    expect(service).toBeTruthy();
  });
});
