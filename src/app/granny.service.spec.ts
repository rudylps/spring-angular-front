import { TestBed, inject } from '@angular/core/testing';

import { GrannyService } from './granny.service';

describe('GrannyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrannyService]
    });
  });

  it('should be created', inject([GrannyService], (service: GrannyService) => {
    expect(service).toBeTruthy();
  }));
});
