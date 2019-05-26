import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProfile, UserRole } from 'src/app/types/user.model';
import { map, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { httpOptions } from 'src/app/types/variables';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private profilesUrl = 'api/users';

  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) { }

  getAllUsers() {
    return this.http.get<UserProfile[]>(this.profilesUrl);
  }

  getOlderUsers() {
    return this.getAllUsers()
      .pipe(
        map(users => users.filter(user => user.role === UserRole.OLDER))
      );
  }

  getHelperUsers() {
    return this.getAllUsers()
      .pipe(
        map(users => users.filter(user => user.role === UserRole.HELPER))
      );
  }

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

  getUserById(id: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.profilesUrl}/${id}`)
  }

  addUser(data: UserProfile) {
    return this.http.post<any>(this.profilesUrl, data, httpOptions);
  }

  updateUser(data: UserProfile) {
    return this.http.put(this.profilesUrl, data, httpOptions);
  }
}
