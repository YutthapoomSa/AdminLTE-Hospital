/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiUserService } from './api-user.service';

describe('Service: ApiUser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiUserService]
    });
  });

  it('should ...', inject([ApiUserService], (service: ApiUserService) => {
    expect(service).toBeTruthy();
  }));
});
