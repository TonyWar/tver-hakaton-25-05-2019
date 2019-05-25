import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProfile } from 'src/app/types/user.model';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private profilesUrl = 'api/users';
  public userProfile?: UserProfile;
  constructor(
    private http: HttpClient,
  ) { }

  getUserProfileAuth(phone: string): Observable<UserProfile> {
    return this.http.get<UserProfile[]>(this.profilesUrl)
      .pipe(
        map(profiles => profiles
          .find(profile => profile.phone === phone)
        ),
        tap(user => { this.userProfile = user; })
      );
  }

  addOlderUser(data: UserProfile) {
    return this.http.post<any>(this.profilesUrl, data);
  }
}
