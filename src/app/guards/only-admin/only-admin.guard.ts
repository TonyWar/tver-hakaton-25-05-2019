import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, LOGOUT_ROUTE } from 'src/app/services/auth/auth.service';
import { take, map } from 'rxjs/operators';
import { UserRole } from 'src/app/types/user.model';

@Injectable({
  providedIn: 'root'
})
export class OnlyAdminGuard implements CanActivate  {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.userAuthData$
      .pipe(
        take(1),
        map(value => {
          if (value && value.role === UserRole.ADMIN) {
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
