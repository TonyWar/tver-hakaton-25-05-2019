import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProfile } from 'src/app/types/user.model';
import { map, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private profilesUrl = 'api/users';
  public userProfile = new ReplaySubject<UserProfile>(1);
  constructor(
    private http: HttpClient,
  ) { }

  getUserProfileAuth(phone: string): Observable<UserProfile> {
    return this.http.get<UserProfile[]>(this.profilesUrl)
      .pipe(
        map(profiles => profiles
          .find(profile => profile.phone === phone)
        ),
        tap(user => {
          console.log('user auth', user);
          this.userProfile.next(user);
        })
      );
  }

  addOlderUser(data: UserProfile) {
    return this.http.post<any>(this.profilesUrl, data);
  }
}
