/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiMenuService } from './api-menu.service';

describe('Service: ApiMenu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiMenuService]
    });
  });

  it('should ...', inject([ApiMenuService], (service: ApiMenuService) => {
    expect(service).toBeTruthy();
  }));
});
