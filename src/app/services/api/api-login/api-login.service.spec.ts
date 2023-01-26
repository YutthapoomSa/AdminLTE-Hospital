/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiLoginService } from './api-login.service';

describe('Service: ApiLogin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiLoginService]
    });
  });

  it('should ...', inject([ApiLoginService], (service: ApiLoginService) => {
    expect(service).toBeTruthy();
  }));
});
