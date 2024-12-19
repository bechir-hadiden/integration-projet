import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { santeGuard } from './sante.guard';

describe('santeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => santeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
