import { TestBed } from '@angular/core/testing';

import { GetFoxService } from './get-fox.service';

describe('GetFoxService', () => {
  let service: GetFoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
