import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { take } from 'rxjs/internal/operators/take';
import { AuthService, LOGOUT_ROUTE } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.userAuthData$
      .pipe(
        take(1),
        map(value => {
          if (value) {
            return true;
          }
          // tslint:disable-next-line: no-floating-promises
          this.router.navigate([LOGOUT_ROUTE], {
            queryParams: {
              return: state.url
            }
          });

          return false;
        })
      );
  }
}
