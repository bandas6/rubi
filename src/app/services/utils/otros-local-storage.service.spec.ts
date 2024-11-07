import { TestBed } from '@angular/core/testing';

import { OtrosLocalStorageService } from './otros-local-storage.service';

describe('OtrosLocalStorageService', () => {
  let service: OtrosLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtrosLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
