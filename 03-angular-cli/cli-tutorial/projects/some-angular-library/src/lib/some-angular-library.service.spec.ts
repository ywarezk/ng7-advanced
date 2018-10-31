import { TestBed } from '@angular/core/testing';

import { SomeAngularLibraryService } from './some-angular-library.service';

describe('SomeAngularLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SomeAngularLibraryService = TestBed.get(SomeAngularLibraryService);
    expect(service).toBeTruthy();
  });
});
