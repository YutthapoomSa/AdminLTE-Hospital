/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiSubMenuService } from './api-sub-menu.service';

describe('Service: ApiSubMenu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiSubMenuService]
    });
  });

  it('should ...', inject([ApiSubMenuService], (service: ApiSubMenuService) => {
    expect(service).toBeTruthy();
  }));
});
