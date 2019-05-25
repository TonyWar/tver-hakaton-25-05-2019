import { Injectable } from '@angular/core';
import { UserProfile, UserRole } from 'src/app/types/user.model';
import { ReplaySubject, Observable, concat, of } from 'rxjs';
import { UserAuthService } from '../user-auth/user-auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly userAuthData$: ReplaySubject<UserProfile | undefined>;
  constructor(
    private readonly userService: UserAuthService
  ) {
    this.userAuthData$ = new ReplaySubject<UserProfile | undefined>(1);
    // tslint:disable-next-line: no-floating-promises
    this.userService.getUserDataFromStorage()
      .then(userData => {
        this.userAuthData$.next(userData);
      });
  }

  async login(user: UserProfile): Promise<boolean> {
    this.userAuthData$.next(user);

    return this.userService.setUserData(user);
  }

  async logout(): Promise<boolean> {
    this.userAuthData$.next(undefined);

    return this.userService.clearUserData();
  }

  public checkAuth$(): Observable<boolean> {
    // tslint:disable-next-line: deprecation
    return concat(of(false), this.userAuthData$.pipe(map(user => !!user)));
  }

  public checkRole$(): Observable<UserRole | undefined> {
    return concat(of(undefined), this.userAuthData$.pipe(map(user => user.role)));
  }
}
