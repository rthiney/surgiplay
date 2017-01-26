/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GownSizeService } from './gown-size.service';

describe('GownSizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GownSizeService]
    });
  });

  it('should ...', inject([GownSizeService], (service: GownSizeService) => {
    expect(service).toBeTruthy();
  }));
});
