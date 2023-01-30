import { TestBed } from '@angular/core/testing';

import { SwalServiceService } from './swal-service.service';

describe('SwalServiceService', () => {
  let service: SwalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
