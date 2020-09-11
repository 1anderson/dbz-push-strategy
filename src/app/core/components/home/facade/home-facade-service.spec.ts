import { TestBed } from '@angular/core/testing';

import { HomeFacadeService } from './home-facade-service';

describe('HomeFacadeServiceService', () => {
  let service: HomeFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
