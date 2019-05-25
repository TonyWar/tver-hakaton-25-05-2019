import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProfile } from 'src/app/types/user.model';
import { map, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private profilesUrl = 'api/users';
  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) { }

  getUserProfileAuth(phone: string): Observable<UserProfile> {
    return this.http.get<UserProfile[]>(this.profilesUrl)
      .pipe(
        map(profiles => profiles
          .find(profile => profile.phone === phone)
        ),
        tap(user => {
          console.log('user auth', user);
          this.auth.login(user);
        })
      );
  }

  addOlderUser(data: UserProfile) {
    return this.http.post<any>(this.profilesUrl, data);
  }
}
