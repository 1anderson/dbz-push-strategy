import { TestBed } from '@angular/core/testing';

import { CharaceterFacadeService } from './characeter-facade.service';

describe('CharaceterFacadeService', () => {
  let service: CharaceterFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharaceterFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
