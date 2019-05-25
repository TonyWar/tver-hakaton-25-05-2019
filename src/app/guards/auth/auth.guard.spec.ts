import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard],
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
