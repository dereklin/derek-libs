import { TestBed } from '@angular/core/testing';

import { ShowRandomPicService } from './show-random-pic.service';

describe('ShowRandomPicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowRandomPicService = TestBed.get(ShowRandomPicService);
    expect(service).toBeTruthy();
  });
});
